# create table
create table test (
    id bigint not null auto_increment,
    num int not null,
    primary key(id)
);

# create test datas
insert test(num)
with recursive data as (
    select 0 as num
    union all
    select num+1 from data where num < 999
)
select num + round(rand() * 1000) from data;

# order by using index
explain select * from test as t1
join test as t2 on t1.id = t2.id
where t1.id < 500
order by t1.id;

# order by using filesort
explain select * from test as t1
join test as t2 on t1.id = t2.id
order by t1.num;

# order by using temporary; using filesort
explain select * from test as t1
join test as t2 on t1.id = t2.id
order by t2.num;



