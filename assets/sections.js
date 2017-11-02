angular.module('cafapi.templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('showcase/en-us/introduction.md',
    "# Accelerate your time to value\n" +
    "\n" +
    "The Common Application Framework is a collection of microservices essential for any developer of big data applications. \n" +
    "We are the recognized leaders in delivering big data enterprise applications and we designed these services to form the core of our next generation archiving, \n" +
    "back-up, content management, and analytics products.\n" +
    "\n" +
    "We're committed to open-sourcing all of these services to more rapidly fuel innovation in the community as well as to provide standards \n" +
    "with regards to the management of unstructured information at scale.\n" +
    "\n" +
    "---\n" +
    "\n" +
    "![Overview](assets/img/microservices-graphic.png)\n" +
    "\n" +
    "Each microservice is wrapped in a Docker container for light-weight portability and rapid development. \n" +
    "They can be deployed stand-alone or with fault-tolerant queues running on Apache Mesos with Marathon for massive scalability \n" +
    "and high availability. These services are designed for SaaS deployment and are fully multi-tenant aware."
  );


  $templateCache.put('showcase/en-us/services/analytics.md',
    "The Analytics service provides a REST API to query and retrieve information from structured and un-structured data sources. You can perform\n" +
    "full-text and field-based queries to retrieve data stored as documents in an unstructured database. The API provides a simple query language,\n" +
    "which is loosely based on the contextual query language specification. In addition to simple queries, the API provides a way to write SQL\n" +
    "templates, which allow you to perform analytical operations such as aggregations, averages, time series analysis, log analysis, trend detection\n" +
    "and so on. You can also apply full-text query filters on analytical queries"
  );


  $templateCache.put('showcase/en-us/services/application-resources.md',
    "The Application Resources service provides a RESTful API to create and manage application metadata.  The service uses entities and associations to store metadata in a hierarchical and non-hierarchical manner. The API is designed to be used in a  SaaS environment and is built to be multi-tenant aware.\n"
  );


  $templateCache.put('showcase/en-us/services/aspects.md',
    "UX Aspects is the only open source user interface framework for building modern, responsive, mobile big data applications on the web. \n" +
    "\n" +
    "Aspects provides all of the essentials required for your big data project, allowing you to swiftly create dashboards and reports that provide users with the\n" +
    "insights they crave from their big data applications. Aspects is based on best-of-breed, open source technologies, including Angular 4,\n" +
    "Bootstrap and D3. It is easy to include in your web applications with the Bower web package manager.\n"
  );


  $templateCache.put('showcase/en-us/services/auditing.md',
    "The Audit Service is designed to provide auditing of user and system actions by defining the required events and the information associated with each event.  An application audit event definition file can be used to generate an application-specific, client-side auditing library.  The Audit service is multi-tenant aware.  Applications send events using the generated client-side auditing library to Elasticsearch where they are indexed according to each tenant. "
  );


  $templateCache.put('showcase/en-us/services/auto_scaler.md',
    "The Autoscaler service provides on-demand scaling of services, allowing you to efficiently dedicate resources where they are needed most in\n" +
    "your Mesos cluster, and minimizing costs and ensuring user satisfaction. The Autoscaler is an extensible framework, which allows you to provide\n" +
    "your own modules to retrieve services to scale, metrics to make scaling decisions and instigate a scaling action. The Autoscaler service provides\n" +
    "a source for Marathon that identifies services to scale using Marathon labels. A RabbitMQ workload analyzer retrieves details of RabbitMQ\n" +
    "queues to make scaling decisions. A Marathon application scaler issues commands to the Marathon REST API to scale up and down a service."
  );


  $templateCache.put('showcase/en-us/services/data_processing.md',
    "The Data Processing service provides advanced processing functions to allow machines to interrogate and analyze a wide range of file formats.\n" +
    "With such a wide range of data sources, including email, voice and image, data analytics can be a challenging problem. The Data Processing\n" +
    "service allows you to create bespoke data processing pipelines, which perform any of the following data processing actions based on the file\n" +
    "type and metadata.\n"
  );


  $templateCache.put('showcase/en-us/services/imaging.md',
    "The Imaging service provides the ability to convert between HTML and searchable PDF, as well as between PDF and JPEG, PNG, TIFF and other common image formats. In addition to format conversion, the Imaging service supports document mark-up with redactions and endorsements. Redactions can permanently remove sensitive content from documents while endorsements can add text annotations to documents.\n" +
    "\n"
  );


  $templateCache.put('showcase/en-us/services/job_service.md',
    "The Job service provides an extensible framework for the distributed processing of batch workloads using an elastically scaled pool of workers\n" +
    "built using the worker framework. The Job service’s extensible design allows you to define a batch of work and provide a batch processor plugin\n" +
    "that interprets a batch, splitting it into smaller batches or individual items of work upon which the service can act. The process of batch splitting\n" +
    "is scaled elastically using the autoscaler, allowing sub-batches of a larger batch to be processed in parallel. The individual items of work emerge\n" +
    "and go into the RabbitMQ queue, which is defined in the job and processed by workers. The workers also scale elastically based on the load."
  );


  $templateCache.put('showcase/en-us/services/marathon_loader.md',
    "The Marathon Loader is a Java application that automates the process of deploying Marathon applications. You create a directory structure of\n" +
    "applications and Marathon templates using $ placeholders to allow values to be modified for different environments. Create various Java or\n" +
    "JSON property files to map placeholders to values and then use the loader to send the fully-formed applications to Marathon. The Marathon\n" +
    "Loader can also be used to create environment-specific configuration files that are supplied to the Mesos sandboxes of applications.\n"
  );


  $templateCache.put('showcase/en-us/services/storage.md',
    "The Storage Service allows for the secure upload and download of assets to locations offered by storage providers.\n" +
    "This service makes it easy to define the configurations and security credentials of storage providers and how they handle assets. It also offers a REST API which enables simple, smooth and effortless storage operations.\n" +
    "Multiple storage providers are integrated into the Storage Service, including File System based and Amazon's Simple Storage Service (S3)."
  );


  $templateCache.put('showcase/en-us/services/worker_framework.md',
    "The Worker Framework is a set of building blocks for asynchronous, distributed, data-processing microservices known as workers. This\n" +
    "framework is designed for high scalability and fault tolerance, and is easily extensible. The Worker Framework provides a foundation for cross platform,\n" +
    "cloud-ready, distributed data-processing microservices (workers). The framework is designed for massive scalability, redundancy,\n" +
    "elasticity and resilience, which are achieved through architectural choices and technologies like Docker, Apache Mesos, Marathon and queue based\n" +
    "messaging with RabbitMQ. You can extend this framework through integration with many external and internal components, such as\n" +
    "storage services. The Worker Framework is a good fit for any data-processing scenario, including both on-premise and cloud-based solutions\n" +
    "delivered as SaaS. For example, the Worker Framework could benefit solutions for content processing, mathematical and statistical analysis, and\n" +
    "image and audio processing. The Worker Framework is written entirely in Java and features the necessary infrastructure for execution of\n" +
    "workers, messaging with fault-tolerant queues, monitoring, scaling, error handling and external data exchange. It also includes a set of base\n" +
    "classes and interfaces allowing rapid development and integration.\n"
  );

}]);
