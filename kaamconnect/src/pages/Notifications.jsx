import { Link } from "react-router";
import { useState } from "react";
function Notifications() {
const  [notifications, setNotifications] = useState([
{
    id: 1,
    icon: "📅",
    title: "New Booking Request",
    message: "Rahul Sharma has requested an electrician service.",
    time: "2 minutes ago",
    type: "booking",
    unread: true,
},
{
    id: 2,
    icon: "✅",
    title: "Booking Accepted",
    message: "Your booking has been accepted by Rajesh Kumar.",
    time: "1 hour ago",
    type: "success",
    unread: true,
},
{
    id: 3,
    icon: "❌",
    title: "Booking Rejected",
    message: "Your booking request could not be accepted.",
    time: "3 hours ago",
    type: "error",
    unread: true,
},
{
    id: 4,
    icon: "🎉",
    title: "Job Completed",
    message: "Your service has been completed successfully.",
    time: "Yesterday",
    type: "completed",
    unread: false,
},
]);
const markAllAsRead = () => {
  setNotifications((prevNotifications) =>
    prevNotifications.map((notification) => ({
      ...notification,
      unread: false,
    }))
  );
};
return (
    <section className="notifications-page">
    <div className="notifications-container">

        <div className="notifications-header">
        <div>
            <h1>Notifications 🔔</h1>
            <p>Stay updated with your bookings and activities.</p>
        </div>

        <button
className="mark-read-button"
onClick={markAllAsRead}
>
Mark all as read
</button>
        </div>

        <div className="notifications-list">
        {notifications.map((notification) => (
            <div
            key={notification.id}
            className={`notification-card ${
            notification.unread ? "unread" : ""
            }`}
            >
            <div className="notification-icon">
                {notification.icon}
            </div>

            <div className="notification-content">
                <h3>{notification.title}</h3>
                <p>{notification.message}</p>
                <span>{notification.time}</span>
            </div>

            {notification.unread && (
                <div className="notification-unread-dot"></div>
            )}
            </div>
        ))}
        </div>

        <Link to="/" className="notifications-back-link">
        ← Back to Home
        </Link>

    </div>
    </section>
);
}

export default Notifications;