import { Tailwind } from "@onedoc/react-print";
import { SiAndroid, SiTailwindcss, SiGo, SiCplusplus, SiTypescript, SiJavascript, SiPython, SiPostgresql, SiHtml5, SiCss3, SiReact, SiJquery, SiSpring, SiAmazonaws, SiMicrosoftazure, SiJenkins, SiKubernetes, SiDocker, SiGit, SiJira } from 'react-icons/si';
import { FaJava } from "react-icons/fa";

export const OneDocComponent = () => { return (
  <Tailwind>
    <div className="p-4">
      <div className="">
        <div className="flex rounded-t-lg bg-blue-300 sm:px-2 w-full">
          <div className="h-28 w-28 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <img src="https://media.licdn.com/dms/image/D5603AQFuxOwt7l6ATA/profile-displayphoto-shrink_800_800/0/1706031002203?e=1713398400&v=beta&t=UErFAlF_UqGf_UmnwCe5ljVLjGDUY5NkxkMKIB1P9hA" />
          </div>

          <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
              Basil Yusuf
            </p>
            <p className="text-heading">Software Engineer</p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            <div className="flex flex-col sm:w-1/3">
              <div className="py-3 sm:order-none order-2">
                <h2 className="text-lg font-poppins font-bold text-blue-400">
                  Skills
                </h2>
                <div className="border-2 w-20 border-blue-400 my-3"></div>

                <div>
                  <div className="flex items-center my-1">
                    <SiTailwindcss
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">Tailwind CSS</div>
                  </div>
                  <div className="flex items-center my-1">
                    <FaJava
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">Java</div>
                  </div>
                  <div className="flex items-center my-1">
                    <SiAndroid
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">Android</div>
                  </div>
                  <div className="flex items-center my-1">
                    <SiHtml5
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">HTML, CSS, JS</div>
                  </div>
                  <div className="flex items-center my-1">
                    <SiAmazonaws
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">AWS</div>
                  </div>
                  <div className="flex items-center my-1">
                    <SiDocker 
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">Docker</div>
                  </div>
                  <div className="flex items-center my-1">
                    <SiGit 
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">GIT</div>
                  </div>
                  <div className="flex items-center my-1">
                    <SiGo 
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">Go</div>
                  </div>
                  <div className="flex items-center my-1">
                    <SiCplusplus 
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">C++</div>
                  </div>
                  <div className="flex items-center my-1">
                    <SiTypescript 
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">TypeScript</div>
                  </div>
                  <div className="flex items-center my-1">
                    <SiJavascript 
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">JavaScript</div>
                  </div>
                  <div className="flex items-center my-1">
                    <SiJira 
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">Jira</div>
                  </div>
                  <div className="flex items-center my-1">
                    <SiPython 
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">Python</div>
                  </div>
                  <div className="flex items-center my-1">
                    <SiPostgresql 
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">PostgresQL</div>
                  </div>
                  <div className="flex items-center my-1">
                    <SiMicrosoftazure 
                      size={24}
                      className="hover:text-orange-600"
                    />
                    <div className="ml-2">Azure</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:w-1/3">
              <div className="py-3 sm:order-none order-2">
                <h2 className="text-lg font-poppins font-bold text-blue-400">
                  Education
                </h2>
                <div className="border-2 w-40 border-blue-400 my-3"></div>
                <div className="flex items-center my-1">
                    <div className="ml-2">University of Guelph</div>
                  </div>
                </div>
            </div>
            </div>

            

            <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-blue-400">
                  Work Experience
                </h2>
                <div className="border-2 w-20 border-blue-400 my-3"></div>

                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <p className="text-lg font-bold">
                      Deloitte | Software Engineer
                    </p>
                    <p className="font-semibold text-sm">
                      2021 - Present
                    </p>
                    <p className="font-semibold text-sm mt-2 mb-1">
                      Key Responsibilities
                    </p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                      <li> Transitioned from manual deployments to Continuous Deployment (CD) by building a Deployment Pipeline that
tests and deploys directly to AWS infrastructure, reducing deployment time from 20 minutes to &lt; 5 minutes</li>
                      <li>Developed and configured Docker containers for React.js, MongoDB, Express/GraphQL, and Nginx, successfully
deploying them on AWS ECS - Fargate, within a secure VPC environment, ensuring robust security measures</li>
                    </ul>
                  </div>

                  <div className="flex flex-col mt-8">
                    <p className="text-lg font-bold">
                      Amazon | Software Engineer Intern
                    </p>
                    <p className="font-semibold text-sm">
                      2020-2021
                    </p>
                    <p className="font-semibold text-sm mt-2 mb-1">
                      Key Responsibilities
                    </p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                      <li>Engineered a web app for Amazon Kids+ to fetch subscription offers from different regions, attach metadata to
offers, and update customer eligibility for offers, reducing processing time from 3 - 5 minutes to &lt; 5 seconds
</li>
                      <li> Developed and deployed Virtual Private Cloud (VPC) and AWS Lambda infrastructure using AWS CDK
(TypeScript), ensuring secure connections by adding IAM roles for enhanced deployment and connectivity
</li>
                    </ul>
                  </div>
                  <div className="flex flex-col mt-8">
                    <p className="text-lg font-bold">
                      TD Bank | Software Engineer Intern
                    </p>
                    <p className="font-semibold text-sm">
                      2020-2021
                    </p>
                    <p className="font-semibold text-sm mt-2 mb-1">
                      Key Responsibilities
                    </p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                      <li> Migrated 9 SOAP API endpoints to 3 REST API endpoints in Java and Spring Boot using OpenAPI specifications
that scales to over a million customers resulting in reduction of production downtime from 5 minutes to &lt; 1 second</li>
                      <li>evised a robust XML parser using Python that seamlessly converted 9 endpoints from XML to JSON, boosting
data accessibility for other engineers on the team by 75% and significantly reducing parsing time by 90%
</li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Tailwind>
)};
