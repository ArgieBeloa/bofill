
import Card from "@/app/components/Card";

import {
  Employee1,
  Employee2,
  Employee3,
  Employee4,
  Employee5,
  Employee6,
  Employee7,
  Employee8,
} from "@/app/helpers/employee/employee";
import type EmployeeModel from "@/app/helpers/employee/employeeModel";

const practitionersPage = () => {
 let employees: EmployeeModel[] = [];

const employeeList = [
  Employee1,
  Employee2,
  Employee3,
  Employee4,
  Employee5,
  Employee6,
  Employee7,
  Employee8,
];

for (const employee of employeeList) {
  employees.push(employee);
}
  return (
    <>
      {/* <NavbarPremium /> */}
      {/* <section className="min-h-[calc(100vh-80px)] flex flex-col bg-linear-to-br from-blue-100 via-white to-blue-200 shadow-[0_30px_80px_rgba(37,99,235,0.18)]"> */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col">
        <div className="flex flex-col justify-center items-center my-15">
          <h1 className="font-bold text-4xl tracking-wider">
            Our Mental Health Professionals
          </h1>
          <h2 className="text-lg text-gray-600">
            Every journey is unique, and our compassionate practitioners are
            here to
          </h2>
          <h2 className="text-lg text-gray-600">
            provide expert guidance, support, and care every step of the way.
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-4 gap-4 ">
          {employees.map((employeeData: EmployeeModel) => (
            <Card
              image={employeeData.image}
              key={employeeData.id}
              id={employeeData.id}
              name={employeeData.name}
              age={employeeData.age}
              licensed={employeeData.licensed}
              specialties={employeeData.specialties}
              services={employeeData.services}
              languages={employeeData.languages}
              clientfocus={employeeData.clientfocus}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default practitionersPage;
