/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
// chakra imports

export function SidebarLinks(props) {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          route.secondary ? (
            <div key={index} className="relative mb-3 flex flex-col hover:cursor-pointer">
              <li
                className={`my-[3px] flex cursor-pointer items-center px-8 ${activeRoute(route.path) ? "font-bold text-navy-700 dark:text-white" : "font-medium text-gray-600"
                  }`}
              >
                <span>{route.icon || <DashIcon />} </span>
                <p className="leading-1 ml-4">{route.name}</p>
              </li>

              <ul className="ml-4">
                {route.subRoutes.map((subRoute, subIndex) => (
                  <Link key={subIndex} to={subRoute.layout + "/" + subRoute.path}>
                    <li
                      className={`my-[3px] flex cursor-pointer items-center px-8 ${activeRoute(subRoute.path) ? "font-bold text-navy-700 dark:text-white" : "font-medium text-gray-600"
                        }`}
                    >
                      {/* <span>{subRoute.icon || <DashIcon />} </span> */}
                      <p className="leading-1 ml-4">{subRoute.name}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ) : (
            <Link key={index} to={route.layout + "/" + route.path}>
              <div className="relative mb-3 flex hover:cursor-pointer">
                <li
                  className={`my-[3px] flex cursor-pointer items-center px-8 ${activeRoute(route.path) ? "font-bold text-navy-700 dark:text-white" : "font-medium text-gray-600"
                    }`}
                >
                  <span>{route.icon || <DashIcon />} </span>
                  <p className="leading-1 ml-4">{route.name}</p>
                </li>

                {activeRoute(route.path) && (
                  <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
                )}
              </div>
            </Link>
          )

        );
      }
    });
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
