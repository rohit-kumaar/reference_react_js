import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <main>
      <Nav />
      <section className="row container mt-1">
        <aside className="col-md-4">
          <Sidebar />
        </aside>
        <aside className="col-md-8">
          <h3> Welcome to dashboard</h3>
        </aside>
      </section>
    </main>
  );
}
