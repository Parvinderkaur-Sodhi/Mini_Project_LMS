import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import momentPlugin from "@fullcalendar/moment";
import "@fullcalendar/core";
import "@fullcalendar/daygrid";
import moment from "moment";

const LeaveRequestCalendar = ({ leaveRequests }) => {
  // Convert leave requests data to events format expected by FullCalendar
  const events = leaveRequests.map((leaveRequest) => {
    const { requestId, employeeId, startDate, endDate, status } = leaveRequest;

    // Format dates for FullCalendar (YYYY-MM-DDTHH:mm:ss)
    const formattedStartDate = moment(startDate).format("YYYY-MM-DD");
    const formattedEndDate = moment(endDate).add(1, 'day').format("YYYY-MM-DD");

    let eventColor = ""; // Default color

    if (status === "Accepted") {
      eventColor = "green"; // Green for accepted
    } else if (status === "Rejected") {
      eventColor = "red"; // Red for rejected
    } else {
      eventColor = "blue"; // Blue for pending (assuming no other status)
    }

    return {
      id: requestId,
      title: employeeId.name, // Display the employee's name as the event title
      start: formattedStartDate,
      end: formattedEndDate,
      color: eventColor, // Set the event color based on status
    };
  });

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, momentPlugin]}
      initialView="dayGridMonth"
      events={events}
      height="100vh" // Set the height to fill the viewport vertically
    />
  );
};

export default LeaveRequestCalendar;
