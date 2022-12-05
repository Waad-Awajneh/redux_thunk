import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./usersSlice";

function Home() {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.usersSlice.data);
  const usersDataStatus = useSelector((state) => state.usersSlice.status);
  console.log(usersData);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      {usersDataStatus === "Pending" ? (
        <span>Pending</span>
      ) : usersDataStatus === "Fulfilled" ? (
        <span>Fulfilled</span>
      ) : usersDataStatus === "Rejected" ? (
        <span>Rejected</span>
      ) : (
        ""
      )}

      {usersData.map((userData) => (
        <div>
          <span>{userData.id}</span>
          <span>{userData.name}</span>
          <span>{userData.username}</span>
          <span>{userData.email}</span>
        </div>
      ))}
    </>
  );
}

export default Home;
