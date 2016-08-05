angular.module('cafapi.templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('showcase/en-us/introduction.md',
    "# Accelerate your time to value\r" +
    "\n" +
    "\r" +
    "\n" +
    "The HPE Common Application Framework is a collection of microservices essential for any developer of big data applications. \r" +
    "\n" +
    "We are the recognized leaders in delivering big data enterprise applications and we designed these services to form the core of our next generation archiving, \r" +
    "\n" +
    "back-up, content management, and analytics products.\r" +
    "\n" +
    "\r" +
    "\n" +
    "We're committed to open-sourcing all of these services to more rapidly fuel innovation in the community as well as to provide standards \r" +
    "\n" +
    "with regards to the management of unstructured information at scale.\r" +
    "\n" +
    "\r" +
    "\n" +
    "---\r" +
    "\n" +
    "\r" +
    "\n" +
    "![Overview](assets/img/microservices-graphic.png)\r" +
    "\n" +
    "\r" +
    "\n" +
    "Each microservice is wrapped in a Docker container for light-weight portability and rapid development. \r" +
    "\n" +
    "They can be deployed stand-alone or with fault-tolerant queues running on Apache Mesos with Marathon for massive scalability \r" +
    "\n" +
    "and high availability. These services are designed for Saas deployment and are fully multi-tenant aware."
  );


  $templateCache.put('showcase/en-us/services/data_processing.md',
    "# Data Processing\r" +
    "\n" +
    "\r" +
    "\n" +
    "The Data Processing service provides advanced processing functions to allow machines to interrogate and analyze a wide range of file formats.\r" +
    "\n" +
    "With such a wide range of data sources, including email, voice and image, data analytics can be a challenging problem. The Data Processing\r" +
    "\n" +
    "service allows you to create bespoke data processing pipelines, which perform any of the following data processing actions based on the file\r" +
    "\n" +
    "type and metadata:\r" +
    "\n"
  );


  $templateCache.put('showcase/en-us/services/elements.md',
    "# Elements - User Experience\r" +
    "\n" +
    "\r" +
    "\n" +
    "Elements is the only open source user interface framework for building modern, responsive, mobile big data applications on the web. \r" +
    "\n" +
    "\r" +
    "\n" +
    "Elements provides all of the essentials required for your big data project, allowing you to swiftly create dashboards and reports that provide users with the\r" +
    "\n" +
    "insights they crave from their big data applications. Elements is based on best-of-breed, open source technologies, including AngularJS,\r" +
    "\n" +
    "Bootstrap and D3. It is easy to include in your web applications with the Bower web package manager.\r" +
    "\n"
  );


  $templateCache.put('showcase/en-us/services/storage.md',
    "# Storage Service\r" +
    "\n" +
    "\r" +
    "\n" +
    "The Storage service allows for the secure upload and download of assets in a multi-tenant environment. The Storage service provides a REST\r" +
    "\n" +
    "API for storing, retrieving, and browsing of assets. It is capable of scaling to petabytes of data, and offers block level single instance storage\r" +
    "\n" +
    "(deduplication) on a per-tenant basis. \r" +
    "\n" +
    "\r" +
    "\n" +
    "Upload and download APIs provide advanced capabilities such as the ability to resume, send/retrieve\r" +
    "\n" +
    "blocks in any order, as well as send/retrieve blocks in parallel per asset. The service provides WORM capabilities on a per asset basis, allowing\r" +
    "\n" +
    "you to define a period of time for which the asset cannot be modified and is guaranteed to be returned exactly as it was uploaded. \r" +
    "\n" +
    "\r" +
    "\n" +
    "The Storage service utilizes the Identity Management service for authentication, as well as authorization to so that only users with appropriate roles &\r" +
    "\n" +
    "permissions can access stored assets. The Storage service also utilizes the Auditing service, providing a record of user actions at the API level.\r" +
    "\n"
  );

}]);
