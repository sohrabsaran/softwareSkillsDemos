Important Links:
- https://en.wikipedia.org/wiki/Elasticsearch
- https://www.elastic.co/guide/en/elastic-stack-glossary/current/terms.html

It is a search engine.

Features:
- distributed (can use multiple machines to run faster)
- multi-tenanted (because clients written in different languages connect to it over HTTP???)
- full-text search
- HTTP web interface
- provides scheme-free JSON documents (what is that?)
- written in Java
- open source license (dual-licensed, what is the advantage exactly in that?)
- client available in multiple languages
- most popular search engine (next popular is Apache Solr)
- scalable (because it is distributed?)
- near real-time search (means that it is very fast?)
- can be used to search all kinds of documents (what's the trick that enables this?)

Design:
- ElasticSearch reuses the Apache Lucene library. Apache Lucene is an open source text indexing and search engine (so what exactly is ElasticSearch adding on top of Lucene?).
- An ElasticSearch cluster is a group of related ElasticSearch nodes (machines). Multiple machines are supported for distributed and scalable search.
- Elasticsearch automatically distributes your data and query load across all of the available nodes.
- An ElasticSearch index is something that corresponds to a Database? of an RDBMS (as per <a href="https://stackoverflow.com/questions/15025876/what-is-an-index-in-elasticsearch/15026433">this answer</a> index is like a database, and there is something called 'types' that corresponds to tables).
- The same link has an answer below the accepted answer that leads to https://www.elastic.co/guide/en/elasticsearch/reference/6.0/removal-of-types.html
- We can see that types were deprecated/removed from ElasticSearch v7 onwards. The reason is as follows:
There could be multiple Types defined on an index and each type could have multiple fields. 
This is like an RDMS can have multiple tables, and each table can have multiple fields.
However, in an Elasticsearch index, fields that have the same name in different mapping types are backed by the same Lucene field internally. 
This can lead to frustration when, for example, you want deleted to be a date field in one type and a boolean field in another type in the same index.
On top of that, storing different entities that have few or no fields in common in the same index leads to sparse data and interferes with Lucene’s ability to compress documents efficiently.
For these reasons, we have decided to remove the concept of mapping types from Elasticsearch.
**So this means that ElasticSearch index concept corresponds to an RDBMS table now**.

- As per the Elastic Stack glossary: an 'index' is simply a collection of JSON documents. (But then isn't that more like a MongoDB collection i.e. RDBMS table????)
- An ElasticSearch index is a logical grouping of one or more physical shards.
- A 'shard' in the Elastic Stack context, just means a Lucene instance containing some or all data for an index. Elasticsearch automatically creates and manages these Lucene instances. 
- There are two types of shards: primary and replica. Each primary shard can have zero or more replica shards.
- A shard (database shard) is a horizontal partition of data in a database or search engine. 
- A partition is a division of a logical database or its constituent elements into distinct independent parts. 
- Horizontal partitioning involves putting different rows into different tables (these are logically, PARTIAL TABLES). 
  For example:
   - customers with ZIP codes less than 50000 are stored in CustomersEast 
   - customers with ZIP codes greater than or equal to 50000 are stored in CustomersWest.

Use Cases:
- Add data to ElasticSearch
- Delete data added to ElasticSearch
- Modify data added to ElasticSearch (can be simulated by Delete+Add use cases)
- Query data stored in ElasticSearch
- Index creation
