// src/App.js
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import NameList from "./components/NameList";
import StudentCard from "./components/StudentCard";
import UserProfile from "./components/UserProfile";
import StudentSelector from "./components/StudentSelector";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [showList, setShowList] = useState(true);

  const students = [
    { name: "traltb1@fe.edu.vn", age: 39, avatar: "/images/student1.jpg" },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: "/images/student2.jpg" },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: "/images/student3.jpg" },
  ];

  return (
    <>
      <Welcome name="traltb@fe.edu.vn" />
      <UserProfile />
      <NameList names={["traltb@fe.edu.vn", "test@fe.edu.vn"]} />
      <StudentSelector />

      <Container>
        <Button onClick={() => setShowList(!showList)} className="my-3">
          {showList ? "Ẩn danh sách học viên" : "Hiện danh sách học viên"}
        </Button>

        {showList && (
          <>
            <h1 className="my-4 text-center">Student information</h1>
            <Row>
              {students.map((student, i) => (
                <Col key={i} sm={12} md={4}>
                  <StudentCard student={student} />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </>
  );
}

export default App;
