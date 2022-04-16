const Dashboard = ({ user }) => {
   return (
      <div className="dashboard">
         <h1>Welcome here {user && user.name}</h1>
         <p>Here you are in Dashboard</p>
      </div>
   )
}

export default Dashboard;