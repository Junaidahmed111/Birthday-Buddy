import usersData from "@/utils/userData";
import SingleUser from "@/components/SingleUser";

const Users = () => {
  return (
    <section id="users" className="w-full flex flex-col place-items-center">
      <div className="w-[90%]">
        <div className="font-bold text-xl flex justify-center py-6 text-center">
          <h3 className="text-white">
            Wished <span className="text-colorB">1 million</span> users
            worldwide
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row text-white justify-between gap-y-5 items-center py-5 text-center w-full">
          {usersData.map((user, index) => (
            <SingleUser
              key={index}
              image={user.imageUrl}
              heading={user.title}
              members={user.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Users;
