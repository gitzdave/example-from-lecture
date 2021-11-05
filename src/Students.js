import React from "react";
import "./App.css";
import { studentDatabase } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";

export const Students = () => {
  return (
    <>
      <HomePageHeader />
      <div className="student-container">
        {studentDatabase.map((data, key) => {
          return (
            <div key={key}>
              <Student
                key={key}
                name={data.name}
                studentNumber={data.studentNumber}
                email={data.email}
                university={data.university}
                course={data.course}
                result={data.result}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/UWL-Logo.png" alt="123" class="img-fluid" />
      <h2>UWL Student Tracker</h2>
    </header>
  );
};

const Student = ({name,studentNumber,email,university,course,result}) => {
  if (!Student) return <div />;
  return (
<table class="table table-bordred table-striped">
 <thead>
    <tr>
      <th>Name</th>
      <th>Student ID</th>
      <th>Email</th>
      <th>Uni</th>
      <th>Course</th>
      <th>Result</th>
      <th>Update</th>
      <th>Delete</th>

    </tr>
  </thead>      

   <tbody>
        <tr>
          <td>
            <h5>{name}</h5>
          </td>
          <td>
            <h5>{studentNumber}</h5>
          </td>
          <td>
            <h4>{email}</h4>
          </td>
          <td>
            <p>{university}</p>
          </td>
          <td>
            <p>{course}</p>
          </td>
          <td>
            <p>{result}</p>
          </td>
          <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span>Edit</button></p></td>
    <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span>Del</button></p></td>
        </tr>
   </tbody>

    </table>
  );
};