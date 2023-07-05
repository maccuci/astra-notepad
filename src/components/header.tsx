import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: sessionData } = useSession();
  const isLogged = sessionData?.user;

  return (
    <div>
      <nav className="navbar bg-gradient-to-r from-purple-700 to-purple-500 text-primary-content">
        <div className="flex-1 pl-5 text-3xl font-semibold">
          {sessionData?.user?.name
            ? `${sessionData.user.name}, suas Anotações`
            : "Astra Notepad"}
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown-end dropdown">
            {isLogged ? (
              <div className="flex gap-2">
                <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                  <div className="w-10 rounded-full">
                    <img
                      src={sessionData?.user?.image ?? ""}
                      alt={sessionData?.user?.name ?? ""}
                      width={30}
                      height={30}
                    />
                  </div>
                </label>
                <button
                  className="rounded-xl bg-purple-600 px-8 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:bg-purple-700"
                  onClick={() => signOut()}
                >
                  Sair
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
