---
title: Java集合类的梳理
excerpt: 梳理Java集合类的使用场景
date: 2021-05-29 15:55:00
category: Java
tags: ['集合']
---

在编程中，常常需要集中存放多个数据。从传统意义上讲，数组是我们的一个很好的选择，前提是我们事先已经明确知道我们将要保存的对象的数量。一旦在数组初始化时指定了这个数组长度，这个数组长度就是不可变的，如果我们需要保存一个可以动态增长的数据(在编译时无法确定具体的数量)，java的集合类就是一个很好的设计方案了。

<!--more-->

 


集合类主要负责保存、盛装其他数据，因此集合类也被称为容器类。所以的集合类都位于java.util包下，后来为了处理多线程环境下的并发安全问题，java5还在java.util.concurrent包下提供了一些多线程支持的集合类。

# Java集合类: Set、List、Map、Queue使用场景梳理

 > Collection一组"对立"的元素，通常这些元素都服从某种规则。　　
 > List必须保持元素特定的顺序，Set不能有重复元素，Queue保持一个队列(先进先出)的顺序。
 > Map一组成对的"键值对"对象。

## 区别

> Collection 每个位置只能保存一个元素(对象)。 
> Map保存的是"键值对"，就像一个小型数据库。我们可以通过"键"找到该键对应的"值"。

## Set


- Set集合类似于一个罐子，"丢进"Set集合里的多个对象之间没有明显的顺序。
- Set继承自Collection接口，不能包含有重复元素(记住，这是整个Set类层次的共有属性)。

### 在使用Set集合的时候，应该注意两点：

> (1) 为Set集合里的元素的实现类实现一个有效的equals(Object)方法。
> (2) 对Set的构造函数，传入的Collection参数不能包含重复的元素。

## List

- List集合代表一个元素有序、可重复的集合，集合中每个元素都有其对应的顺序索引。
- List集合允许加入重复元素，因为它可以通过索引来访问指定位置的集合元素。List集合默认按元素的添加顺序设置元素的索引。


### 集合截取问题

```Java
list.subList(start,end);  //截取从start元素（包括）开始到end元素（不包括）位置结束。（下标从0开始）
```

### ArrayList

ArrayList是基于数组实现的List类，它封装了一个动态的增长的、允许再分配的Object[]数组。
### Arrays.asList()方法的使用
该方法是将数组转化为list。有以下几点需要注意：
>（1）该方法不适用于基本数据类型（byte,short,int,long,float,double,boolean）。
>（2）该方法将数组与列表链接起来，当更新其中之一时，另一个自动更新。
>（3）不支持add和remove方法。
### Java集合的交集，并集和差集

### 交集  A.retainAll(B) ,交集的结果在集合A中。
```Java
List stringList = new ArrayList<>();

stringList.add("4");

stringList.add("3");

stringList.add("2");

stringList.add("1");

List list = new ArrayList<>();

list.add("3");

list.add("2");

list.add("8");

list.add("9");

stringList.retainAll(list);

System.out.println(stringList);

System.out.println(stringList.size());

```

### 并集 A.addAll(B) 因为set本身就去重，所有直接全部添加到一个集合中取并集。

```Java
Set stringList = new HashSet<>();

stringList.add("4");

stringList.add("3");

stringList.add("2");

stringList.add("1");

Set list = new HashSet<>();

list.add("3");

list.add("2");

list.add("8");

list.add("9");

stringList.addAll(list);

System.out.println(stringList);

System.out.println(stringList.size());
```

<font color="red">注意</font>：并集要使用Set，不然会有重复值。

### 差集 removeAll方法，去掉一集合中包含的另一个集合的值。A.removeAll(B)。

```Java
List stringList = new ArrayList<>();

stringList.add("4");

stringList.add("3");

stringList.add("2");

stringList.add("1");

List list = new ArrayList<>();

list.add("3");

list.add("2");

list.add("8");

list.add("9");
stringList.removeAll(list);

System.out.println(stringList);

System.out.println(stringList.size());

```


## Queue

- Queue用于模拟"队列"这种数据结构(先进先出 FIFO)。
- 队列的头部保存着队列中存放时间最长的元素，队列的尾部保存着队列中存放时间最短的元素。
- 新元素插入(offer)到队列的尾部，访问元素(poll)操作会返回队列头部的元素，队列不允许随机访问队列中的元素。

## Map

- Map用于保存具有"映射关系"的数据，因此Map集合里保存着两组值，一组值用于保存Map里的key，另外一组值用于保存Map里的value。
- key和value都可以是任何引用类型的数据。Map的key不允许重复，即同一个Map对象的任何两个key通过equals方法比较结果总是返回false。
- Map的这些实现类和子接口中key集的存储形式和Set集合完全相同(即key不能重复) Map的这些实现类和子接口中value集的存储形式和List非常类似(即value可以重复、根据索引来查找)。

###  HashMap


和HashSet集合不能保证元素的顺序一样，HashMap也不能保证key-value对的顺序。并且类似于HashSet判断两个key是否相等的标准也是: 两个key通过equals()方法比较返回true、同时两个key的hashCode值也必须相等

map中的遍历：

```Java
// KeySet 获取key

for (Integer key : map.keySet()) {

   System.out.println(key);

}

// values 获取value

for (Object value : map.values()) {

System.out.println(value);

}

// entrySet 获取key and value

for (Map.Entry<Integer, Object> entry : map.entrySet()) {

    System.out.println(entry.getKey() + ":" + entry.getValue());

}

// Iterator entrySet 获取key and value

public void testIterator() {

Iterator<Map.Entry<Integer, Integer>> it = map.entrySet().iterator();

        while (it.hasNext()) {

Map.Entry<Integer, Integer> entry = it.next();

         System.out.println(entry.getKey() + ":" + entry.getValue());

          // it.remove(); 删除元素

      }

}
```
### 简单性能测试
|方法|耗时|做什么|
|---|---|:---:|
|KeySet|  392  |  获取key   |
| Values  |  320  |  获取Values   |
|  entrySet | 465   |  获取key and value   |
|entrySet entrySet | 508   |  获取key and value   |
|Lambda| 536   |  获取key and value   |
### 结论
> 如果`只是获取key`，或者`value`，推荐使用`keySet`或者`values`方式。 

> 如果`同时需要key`和`value`，推荐使用`entrySet`。

> 如果需要在遍历过程中删除元素，推荐使用`Iterator`。  

> 如果需要在遍历过程中增加元素，可以新建一个临时map存放新增的元素，等遍历完毕，再把临时map放到原来的map中。
