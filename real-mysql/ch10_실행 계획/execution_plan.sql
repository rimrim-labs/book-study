# create table
create table employees
(
    id  bigint  not null auto_increment,
    num int not null,
    primary key (id)
);

create table salaries
(
    emp_no    bigint   not null,
    from_date datetime not null,
    salary    int      not null,
    primary key (emp_no, from_date)
);

# create test datas
insert into employees(num)
with recursive data as (select 0 as num
                        union all
                        select num + 1
                        from data
                        where num < 999)
select num + round(rand() * 1000)
from data;

insert into salaries(emp_no, from_date, salary)
select id, date_sub(now(), interval round(rand(1) * 10) day), num
from employees;

/*
 * id
 */

# same id
explain select * from employees e
join salaries s on e.id = s.emp_no
limit 10;

# different id
explain select * from
    (select count(id) as id from employees e) as cnt;

/*
 * select_type
 */

# union
explain select * from(
    (select e1.id from employees e1 limit 10) union all
    (select e2.id from employees e2 limit 10)
) as tb;

# subquery
explain select e.num,
               (select count(id) from employees) as cnt
from employees e;

/*
 * type
 */

# const
explain select id from employees e
where e.id = 1000;

# eq_ref
explain select * from salaries s
join employees e on s.salary = e.id;

# ref
explain select * from salaries s
where s.emp_no = 13;

# range
explain select * from salaries s
where s.emp_no = 13 and from_date <= date_sub(now(), interval 3 day);

# index
explain select * from salaries s
order by s.emp_no;

/*
 * Extra
 */

# join buffer
explain select * from salaries s, employees e;
