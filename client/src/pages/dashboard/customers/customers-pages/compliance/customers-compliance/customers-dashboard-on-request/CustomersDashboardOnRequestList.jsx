import { NavLink } from 'react-router-dom'
import Chart from 'react-apexcharts'
// icons
import { BsBoxArrowUpRight } from "react-icons/bs";

const CustomersDashboardOnRequestList = () => {
    return (
        <div>
            {/* first order container */}
            <div className="w-full rounded-md bg-gray-100 border border-gray-200 mb-7">
                <div className="p-5">
                    <header className="flex items-center justify-between">
                        <h3 className="header-level-4">Makuta Law Firm</h3>
                        <div>
                            <div className="cursor-pointer flex items-center justify-end gap-1 transition-colors ease-in-out duration-150 hover:text-blue-700">
                                <BsBoxArrowUpRight />
                                <div>
                                    <span>start a new case</span>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="flex mt-3">
                        <div className="w-[95%]">
                            <div className="">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat et esse vero maiores illo voluptatem voluptas quaerat pariatur animi, reprehenderit distinctio. Labore, laboriosam?
                                </p>
                            </div>
                            <div className="mt-3">
                                <button className="px-3 py-1 rounded-sm bg-black text-white transition-colors ease-in-out duration-300 hover:bg-gray-800">Get Access</button>
                            </div>
                        </div>
                        <div className="w-[5%]"></div>
                    </div>
                </div>
            </div>
            {/* second order container */}
            <div className="rounded-md border border-gray-200">
                <div className="p-5">
                    <header className="flex items-center justify-between">
                        <div>
                            <h3 className="header-level-4">Pending Cases</h3>
                        </div>
                        <div>
                            <div className="cursor-pointer flex items-center justify-end gap-1 transition-colors ease-in-out duration-150 hover:text-blue-700">
                                <BsBoxArrowUpRight />
                                <div>
                                    <span>view all</span>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* table */}
                    <div className="mt-3">
                        {/* table header */}
                        <header className="grid grid-cols-4 bg-gray-200 rounded-t-md p-2 w">
                            <div>
                                <h3 className="font-semibold">ID</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold">TYPE</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold">CREATED AT</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold">STATUS</h3>
                            </div>
                        </header>
                        {
                            [...Array(3)].map((item, index) => {
                                return (
                                    <NavLink key={index} className="grid grid-cols-4 mt-2 p-2 bg-white border-b border-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-100 cursor-default">
                                        <div>
                                            <span>CVI--2024-04-01000002</span>
                                        </div>
                                        <div>
                                            <span>Succession</span>
                                        </div>
                                        <div>
                                            <span>3 month ago</span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <div>
                                                <span>Pending</span>
                                            </div>
                                            <div>
                                                <button className='transition-colors ease-in-out duration-300 hover:text-blue-700'>
                                                    <BsBoxArrowUpRight />
                                                </button>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* third order container */}
            <div className='mt-7 border border-gray-200 rounded-md'>
                <div className='p-5 grid grid-cols-3 gap-10'>
                    <div>
                        <div className='border border-gray-200 rounded-md p-3'>
                            <Chart
                                height={200}
                                width={'100%'}
                                type='line'
                                series={[
                                    {
                                        name: 'Pending',
                                        data: [20, 50, 20, 100, 120, 100, 170, 170, 175, 200, 250, 200, 300, 270, 320]
                                    },
                                    {
                                        name: 'Active',
                                        data: [5, 20, 50, 70, 200, 120, 150, 200, 170, 230, 250, 300, 290, 330, 300]
                                    },
                                    {
                                        name: 'Closed',
                                        data: [130, 100, 300, 90, 120, 50, 120, 150, 12, 300, 75, 270, 5, 400, 220]
                                    }
                                ]}
                                options={{
                                    chart: {
                                        zoom: {
                                            enabled: false,
                                        },
                                        toolbar: {
                                            show: false,
                                        },
                                    },
                                    dataLabels: {
                                        enabled: false,
                                    },
                                    stroke: {
                                        curve: 'smooth',
                                        width: 1
                                    },
                                    colors: ['#fa7f0c', '#029e40', '#b50c04'],
                                    grid: {
                                        yaxis: {
                                            lines: {
                                                show: false,
                                            },
                                            dataLabels: {
                                                enabled: false
                                            }

                                        },
                                        xaxis: {
                                            lines: {
                                                show: false
                                            },
                                            dataLabels: {
                                                show: false
                                            }
                                        },
                                        padding: {
                                            top: -48,
                                            bottom: -12,
                                        }
                                    },
                                    yaxis: {
                                        labels: {
                                            show: false
                                        },
                                        lines: {
                                            show: false
                                        }
                                    },
                                    xaxis: {
                                        labels: {
                                            show: false
                                        },
                                        axisBorder: {
                                            show: false,
                                        },
                                        axisTicks: {
                                            show: false
                                        }
                                    },
                                    legend: {
                                        show: false
                                    },
                                    title: {
                                        text: ' ',
                                        align: 'left'
                                    },
                                    subtitle: {
                                        text: 'Case Analysis',
                                        align: 'left',
                                        style: {
                                            fontSize: 14,
                                            fontWeight: 600
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className='border border-gray-200 rounded-md p-3'>
                            <Chart
                                type='area'
                                height={200}
                                width={'100%'}
                                series={[
                                    {
                                        name: 'Haddis',
                                        data: [25, 50, 32, 75, 120, 120, 100, 150, 175, 164, 200, 195, 250, 275, 300,250,270,230,190]
                                    }
                                ]}
                                options={{
                                    chart: {
                                        zoom: {
                                            enabled: false
                                        },
                                        toolbar: {
                                            show: false
                                        }
                                    },
                                    dataLabels: {
                                        enabled: false
                                    },
                                    grid: {
                                        yaxis: {
                                            lines: {
                                                show: false
                                            }
                                        },
                                        xaxis: {
                                            lines: {
                                                show: false
                                            }
                                        },
                                        padding: {
                                            top: -40,
                                            bottom: -12
                                        }
                                    },
                                    xaxis: {
                                        labels: {
                                            show: false
                                        },
                                        axisBorder: {
                                            show: false
                                        },
                                        axisTicks: {
                                            show: false
                                        }
                                    },
                                    yaxis: {
                                        labels: {
                                            show: false
                                        }
                                    },
                                    stroke: {
                                        curve: 'smooth',
                                        width: 1
                                    },
                                    colors: ['#c2c2c2']
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className='border border-gray-200 rounded-md p-3'>
                            <Chart
                                width={'100%'}
                                height={200}
                                type='bar'
                                series={[
                                    {
                                        name: 'Pending',
                                        data: [20, 50, 20, 100, 120, 100, 170, 170, 175, 200, 250, 200, 300, 270, 320]
                                    },
                                    {
                                        name: 'Active',
                                        data: [5, 20, 50, 70, 200, 120, 150, 200, 170, 230, 250, 300, 290, 330, 300]
                                    },
                                    {
                                        name: 'Closed',
                                        data: [130, 100, 300, 90, 120, 50, 120, 150, 12, 300, 75, 270, 5, 400, 220]
                                    }
                                ]}
                                options={{
                                    chart: {
                                        zoom: {
                                            enabled: false
                                        },
                                        toolbar: {
                                            show: false
                                        }
                                    },
                                    grid: {
                                        yaxis: {
                                            lines: {
                                                show: false,
                                            }
                                        },
                                        xaxis: {
                                            lines: {
                                                show: false,
                                            }
                                        },
                                        padding: {
                                            top: -48,
                                            bottom: -12,
                                        }
                                    },
                                    xaxis: {
                                        labels: {
                                            show: false
                                        },
                                        axisBorder: {
                                            show: false
                                        },
                                        axisTicks: {
                                            show: false
                                        }
                                    },
                                    yaxis: {
                                        lines: {
                                            show: false
                                        },
                                        labels: {
                                            show: false
                                        }
                                    },
                                    legend: {
                                        show: false
                                    },
                                    dataLabels: {
                                        enabled: false
                                    },
                                    colors: ['#009603', '#d96302', '#2091fa'],
                                    plotOptions: {
                                        bar: {
                                            columnWidth: '45%',
                                            endingShape: 'rounded',
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomersDashboardOnRequestList
