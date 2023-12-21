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

# group by using index
explain select * from employees e
join salaries s on e.id = s.emp_no
group by e.id;

# group by using temporary table
explain select e.num, avg(s.salary) from employees e
join salaries s on e.id = s.emp_no
group by e.num;

