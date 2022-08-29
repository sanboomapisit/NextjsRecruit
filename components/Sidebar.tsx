import classNames from "classnames";
import React, { useMemo, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { FirstPage } from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";

import "../styles/sidebar.module.css";

const menuItems = [
  {
    id: 1,
    label: "Escalate (Admin Only)",
    icon: EqualizerIcon,
    link: "/escalate",
  },
  { id: 2, label: "Dashboard", icon: DashboardIcon, link: "/dashboard" },
  { id: 3, label: "Candidate List", icon: FactCheckIcon, link: "/recruit" },
  { id: 4, label: "Admin", icon: AdminPanelSettingsIcon, link: "/admin" },
];

function Sidebar() {
  const [toggleCollapse, setToggleCollapse] = useState(false); //false sidebar open && true sidebar close
  const [isCollapsible, setIsCollapsible] = useState(false);
  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-4 pd-4 bg-primary flex justify-between flex-col",
    {
      ["w-72"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-red absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const getNavItemClasses = (menu: any) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-hoverBg rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-hoverBg"]: activeMenu ? activeMenu.id === menu.id : false,
        // ["hover:bg-[red]"]: menu.label === "logout" ? true : false,
      }
    );
  };

  const getIconNavClasses = (menu: any) => {
    return classNames("text-text-hoverIcon ", {
      ["text-text-hoverIcon"]: activeMenu ? activeMenu.id === menu.id : "",
    });
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width .3s cubic-bezier(0.2,0,0,1) 0s" }}
    >
      <div className="flex flex-col">
        <div
          className={classNames(
            "text-center opacity-100 transition-opacity ease-in-out duration-500 my-5 ",
            {
              hidden: toggleCollapse,
              ["opacity-0"]: toggleCollapse,
            }
          )}
        >
          <img
            src="/images/logo_recruit.png"
            alt="Icon AIS"
            height={65}
            width={65}
            className={classNames("block m-auto")}
          />

          <div className={classNames("text-center")}>E-Recruitment</div>
        </div>
        <hr style={{ borderColor: "#c2c7d0" }} />
        <div className="flex items-center justify-between relative  my-4">
          <div className="flex items-center pl-1 gap-4">
            <AccountCircleIcon
              fontSize="large"
              className={classNames("text-text-hoverIcon ", {
                hidden: isCollapsible && toggleCollapse,
              })}
            />
            <span
              className={classNames(
                "mt-1 text-base font-medium text-text-navText opacity-100 transition-opacity ease-in-out duration-500",
                {
                  hidden: toggleCollapse,
                  ["opacity-0"]: toggleCollapse,
                }
              )}
            >
              Apisit Srinuanpan
            </span>
          </div>
          {isCollapsible && (
            <div className={collapseIconClasses} onClick={handleSidebarToggle}>
              <ArrowBackIosNewIcon />
            </div>
          )}
        </div>
        <hr style={{ borderColor: "#c2c7d0" }} />
        <div className="flex flex-col items-start mt-6">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            const classesIcon = getIconNavClasses(menu);
            return (
              <div className={classes} key={menu.id}>
                <Link href={menu.link}>
                  <a
                    className={classNames(
                      "flex py-4 px-3 items-center w-full h-full"
                    )}
                  >
                    <div style={{ width: "2.5rem" }}>
                      <Icon className={classesIcon} />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-base font-medium text-text-navText opacity-100 transition-opacity ease-in-out duration-500",
                          {
                            ["opacity-0"]: toggleCollapse,
                          }
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${getNavItemClasses({ label: "logout" })} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <PowerSettingsNewIcon className="text-[red]" />
        </div>
        {!toggleCollapse && (
          <span
            className={classNames(
              "text-base font-medium text-text-hoverIcon opacity-100 transition-opacity ease-in-out duration-500",
              {
                ["opacity-0"]: toggleCollapse,
              }
            )}
          >
            Logout
          </span>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
