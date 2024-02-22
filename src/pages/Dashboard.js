import React, { useEffect, useState } from 'react'
import { faBox, faCheckCircle, faExclamationTriangle, faScrewdriverWrench, faSignInAlt, faSignOutAlt, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { Popover, PopoverContent, PopoverHandler, Card, CardBody, CardHeader, Typography, } from '@material-tailwind/react';
import Chart from "react-apexcharts";

const Dashboard = () => {
    const [popover1, setPopover1] = useState(false);
    const [popover2, setPopover2] = useState(false);
    const [popover3, setPopover3] = useState(false);
    const [popover4, setPopover4] = useState(false);
    const [popover5, setPopover5] = useState(false);
    const [popover6, setPopover6] = useState(false);
    const [popover7, setPopover7] = useState(false);
    const [popover8, setPopover8] = useState(false);

    const popoverHandler1 = {
        onMouseEnter: () => setPopover1(true),
        onMouseLeave: () => setPopover1(false),
    };
    const popoverHandler2 = {
        onMouseEnter: () => setPopover2(true),
        onMouseLeave: () => setPopover2(false),
    };
    const popoverHandler3 = {
        onMouseEnter: () => setPopover3(true),
        onMouseLeave: () => setPopover3(false),
    };
    const popoverHandler4 = {
        onMouseEnter: () => setPopover4(true),
        onMouseLeave: () => setPopover4(false),
    };
    const popoverHandler5 = {
        onMouseEnter: () => setPopover5(true),
        onMouseLeave: () => setPopover5(false),
    };
    const popoverHandler6 = {
        onMouseEnter: () => setPopover6(true),
        onMouseLeave: () => setPopover6(false),
    };
    const popoverHandler7 = {
        onMouseEnter: () => setPopover7(true),
        onMouseLeave: () => setPopover7(false),
    };
    const popoverHandler8 = {
        onMouseEnter: () => setPopover8(true),
        onMouseLeave: () => setPopover8(false),
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    useEffect(() => {
        const dashboardIcons = document.querySelectorAll('.dashboard-icon');
        dashboardIcons.forEach((icon) => {
            icon.style.backgroundColor = getRandomColor();
        });
    }, []);

    const barChart = {
        type: "bar",
        height: 300,
        series: [
          {
            name: "Value",
            data: [ 40, 300, 320, 500, 350, 200, 230, 500],
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          title: {
            show: "",
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#020617"],
          plotOptions: {
            bar: {
              columnWidth: "40%",
              borderRadius: 2,
            },
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
              },
            },
            categories: [
              "Total Asset",
              "Available Asset",
              "Submitted Asset",
              "Leased Asset",
              "Returned Asset",
              "Broken Asset",
              "Missing Asset",
              "Maintenance Asset",
            ],
          },
          yaxis: {
            labels: {
              style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
              },
            },
          },
          grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            padding: {
              top: 5,
              right: 20,
            },
          },
          fill: {
            opacity: 0.8,
          },
          tooltip: {
            theme: "dark",
          },
        },
    };
    
    const pieChart = {
        type: "pie",
        width: 300,
        height: 297,
        series: [44, 55, 13, 43, 22, 12, 72, 12],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          title: {
            show: "",
          },
          labels: [
            "Total Asset",
            "Available Asset",
            "Submitted Asset",
            "Leased Asset",
            "Returned Asset",
            "Broken Asset",
            "Missing Asset",
            "Maintenance Asset",
          ],
          dataLabels: {
            enabled: false,
          },
          colors: ["#E69500", "#4D4D4D", "#808080", "#008066", "#008040", "#E68AFF", "#E64C4C", "#336699"],
          legend: {
            show: false,
          },
        },
    };

    return (
        <>
            <div className='p-2'>
                <div className='bg-gray-800 mb-8 rounded-2xl p-4 shadow'>
                    <h2 className='text-white'>Welcome, Dashboard page :)</h2>
                </div>
                <Card className='rounded-xl' floated={false} shadow={false} color="transparent">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                    >
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                Dashboard & Statistic
                            </Typography>
                            <Typography
                                variant="small"
                                color="gray"
                                className="max-w-sm font-normal"
                            >
                                Visuallization of the data into Card, Bar Chart, and Pie Chart.
                            </Typography>
                        </div>
                    </CardHeader>
                    <Card className="mt-4 p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                        <Link to='/listasset'>
                            <Popover
                                open={popover1}
                                handler={setPopover1}
                            >
                                <PopoverHandler {... popoverHandler1}>
                                    <div className="dashboard-item bg-white rounded-2xl p-6 flex items-center text-center shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#efefef]">
                                        <div className="dashboard-icon rounded-full text-white text-xl p-3">
                                            <FontAwesomeIcon icon={faBox} />
                                        </div>
                                        <div className="dashboard-text ml-5">
                                            <div className="dashboard-value text-2xl font-bold">{100}</div>
                                            <div className="dashboard-label text-[#666] text-sm">Jumlah Asset</div>
                                        </div>
                                    </div>
                                </PopoverHandler>
                                <PopoverContent>
                                    <Typography variant='small'>
                                        Redirect to List of Asset Page
                                    </Typography>
                                </PopoverContent>
                            </Popover>
                        </Link>
                        <Link to='/lease'>
                            <Popover
                                open={popover2}
                                handler={setPopover2}
                                >
                                <PopoverHandler {... popoverHandler2}>
                                    <div className="dashboard-item bg-white rounded-2xl p-6 flex items-center text-center shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#efefef]">
                                        <div className="dashboard-icon text-white rounded-full text-xl p-3">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        <div className="dashboard-text ml-5">
                                            <div className="dashboard-value text-2xl font-bold">{50}</div>
                                            <div className="dashboard-label text-[#666] text-sm">Asset Tersedia</div>
                                        </div>
                                    </div>
                                </PopoverHandler>
                                <PopoverContent>
                                    <Typography variant='small'>
                                        Redirect to Lease Page
                                    </Typography>
                                </PopoverContent>
                            </Popover>
                        </Link>
                        <Link to='/submitted'>
                            <Popover
                                open={popover3}
                                handler={setPopover3}
                                >
                                <PopoverHandler {... popoverHandler3}>
                                    <div className="dashboard-item bg-white rounded-2xl p-6 flex items-center text-center shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#efefef]">
                                        <div className="dashboard-icon text-white rounded-full text-xl p-3">
                                            <FontAwesomeIcon icon={faShareFromSquare} />
                                        </div>
                                        <div className="dashboard-text ml-5">
                                            <div className="dashboard-value text-2xl font-bold">{20}</div>
                                            <div className="dashboard-label text-[#666] text-sm">Asset Diajukan</div>
                                        </div>
                                    </div>
                                </PopoverHandler>
                                <PopoverContent>
                                    <Typography variant='small'>
                                    Redirect to Submitted Page
                                    </Typography>
                                </PopoverContent>
                            </Popover>
                        </Link>
                        <Link>
                            <Popover
                                open={popover4}
                                handler={setPopover4}
                                >
                                <PopoverHandler {... popoverHandler4}>
                                    <div className="dashboard-item bg-white rounded-2xl p-6 flex items-center text-center shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#efefef]">
                                        <div className="dashboard-icon text-white rounded-full text-xl p-3">
                                            <FontAwesomeIcon icon={faSignOutAlt} />
                                        </div>
                                        <div className="dashboard-text ml-5">
                                            <div className="dashboard-value text-2xl font-bold">{20}</div>
                                            <div className="dashboard-label text-[#666] text-sm">Asset Dipinjam</div>
                                        </div>
                                    </div>
                                </PopoverHandler>
                                <PopoverContent>
                                    <Typography variant='small'>
                                        Redirect to History Page / Redirect to Return Page
                                    </Typography>
                                </PopoverContent>
                            </Popover>
                        </Link>
                        <Link>
                            <Popover
                                open={popover5}
                                handler={setPopover5}
                                >
                                <PopoverHandler {... popoverHandler5}>
                                    <div className="dashboard-item bg-white rounded-2xl p-6 flex items-center text-center shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#efefef]">
                                        <div className="dashboard-icon text-white rounded-full text-xl p-3">
                                            <FontAwesomeIcon icon={faSignInAlt} />
                                        </div>
                                        <div className="dashboard-text ml-5">
                                            <div className="dashboard-value text-2xl font-bold">{10}</div>
                                            <div className="dashboard-label text-[#666] text-sm">Asset Dikembalikan</div>
                                        </div>
                                    </div>
                                </PopoverHandler>
                                <PopoverContent>
                                    <Typography variant='small'>
                                        Redirect to History Page
                                    </Typography>
                                </PopoverContent>
                            </Popover>
                        </Link>
                        <Popover
                            open={popover6}
                            handler={setPopover6}
                        >
                            <PopoverHandler {... popoverHandler6}>
                                <div className="dashboard-item bg-white rounded-2xl p-6 flex items-center text-center shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#efefef]">
                                    <div className="dashboard-icon text-white rounded-full text-xl p-3">
                                        <FontAwesomeIcon icon={faExclamationTriangle} />
                                    </div>
                                    <div className="dashboard-text ml-5">
                                        <div className="dashboard-value text-2xl font-bold">0</div>
                                        <div className="dashboard-label text-[#666] text-sm">Broken Asset</div>
                                    </div>
                                </div>
                            </PopoverHandler>
                            <PopoverContent>
                                <Typography variant='small'>
                                Page not found
                                </Typography>
                            </PopoverContent>
                        </Popover>
                        <Popover
                            open={popover7}
                            handler={setPopover7}
                        >
                            <PopoverHandler {... popoverHandler7}>
                                <div className="dashboard-item bg-white rounded-2xl p-6 flex items-center text-center shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#efefef]">
                                    <div className="dashboard-icon text-white rounded-full text-xl p-3">
                                        <FontAwesomeIcon icon={faTimesCircle} />
                                    </div>
                                    <div className="dashboard-text ml-5">
                                        <div className="dashboard-value text-2xl font-bold">{0}</div>
                                        <div className="dashboard-label text-[#666] text-sm">Missing Asset</div>
                                    </div>
                                </div>
                            </PopoverHandler>
                            <PopoverContent>
                                <Typography variant='small'>
                                Page not found
                                </Typography>
                            </PopoverContent>
                        </Popover>
                        <Popover
                            open={popover8}
                            handler={setPopover8}
                        >
                            <PopoverHandler {... popoverHandler8}>
                                <div className="dashboard-item bg-white rounded-2xl p-6 flex items-center text-center shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#efefef]">
                                    <div className="dashboard-icon text-white rounded-full text-xl p-3">
                                        <FontAwesomeIcon icon={faScrewdriverWrench} />
                                    </div>
                                    <div className="dashboard-text ml-5">
                                        <div className="dashboard-value text-2xl font-bold">{0}</div>
                                        <div className="dashboard-label text-[#666] text-sm">Maintenance Asset</div>
                                    </div>
                                </div>
                            </PopoverHandler>
                            <PopoverContent>
                                <Typography variant='small'>
                                    Page not found
                                </Typography>
                            </PopoverContent>
                        </Popover>
                    </Card>
                    <div className='grid md:grid-cols-1 xl:grid-cols-2 gap-1 mt-1'>
                        <Card className='px-2 pb-0'>
                            <Chart {...barChart} />
                        </Card>
                        <Card className='grid place-items-center'>
                            <Chart {...pieChart} />
                        </Card>
                    </div>
                </Card>

                {/* <div className='grid md:grid-cols-1 xl:grid-cols-2 gap-1 mt-1'>
                    <div>
                        <Card>
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                            >
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Bar Chart
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="max-w-sm font-normal"
                                    >
                                        Visuallization of the data into Bar Chart
                                    </Typography>
                                </div>
                            </CardHeader>
                            <CardBody className="px-2 pb-0">
                                <Chart {...barChart} />
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                            >
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Bar Chart
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="max-w-sm font-normal"
                                    >
                                        Visuallization of the data into Pie Chart
                                    </Typography>
                                </div>
                            </CardHeader>
                            <CardBody className="mt-4 grid place-items-center px-2">
                                <Chart {...pieChart} />
                            </CardBody>
                        </Card>
                    </div>
                </div> */}
            </div>
        </>
    )
}
export default Dashboard