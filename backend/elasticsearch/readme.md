Important Links:
- https://en.wikipedia.org/wiki/Elasticsearch
- https://www.elastic.co/guide/en/elastic-stack-glossary/current/terms.html

It is a search engine.

Features:
- distributed
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
- Based on the Lucene library. Apache Lucene is an open source text indexing and search engine (so what exactly is ElasticSearch adding on top of Lucene?)
- An ElasticSearch index is something that corresponds to a **Database** of an RDBMS
- As per the Elastic Stack glossary: an 'index' is simply a collection of JSON documents.
- A 'shard' in the Elastic Stack context, just means a Lucene instance containing some or all data for an index. Elasticsearch automatically creates and manages these Lucene instances. There are two types of shards: primary and replica. 
- 'Distributed' means:
   - indices can be divided into shards and each shard can have zero or more replicas. 
   - A database shard, or simply a shard, is a horizontal partition of data in a database or search engine. 
   - A partition is a division of a logical database or its constituent elements into distinct independent parts. 
   - Horizontal partitioning involves putting different rows into different tables. 
      For example:
      - customers with ZIP codes less than 50000 are stored in CustomersEast 
      - customers with ZIP codes greater than or equal to 50000 are stored in CustomersWest.