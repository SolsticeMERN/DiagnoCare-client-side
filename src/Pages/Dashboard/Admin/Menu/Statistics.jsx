import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { GiTestTubes } from "react-icons/gi";
import { FaBookMedical, FaUsers, FaDollarSign } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie,} from "recharts";
import { Legend } from "@headlessui/react";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const Statistics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = [], isLoading: statsLoading, error: statsError } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/admin-stats");
      return data;
    },
  });

  const { data: chartData = [], isLoading: chartLoading, error: chartError } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/booking");
      return data;
    },
  });


  const { data: deliveryData = [], isLoading: deliveryLoading, error: deliveryError } = useQuery({
    queryKey: ["delivery-ratio"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/delivery-ratio");
      return data;
    },
  });

  console.log(deliveryData);



  if (statsLoading || chartLoading || deliveryLoading) return <p>Loading....</p>;
  if (statsError || chartError || deliveryError) return <p>Error loading data</p>;

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = ({ fill, x, y, width, height }) => {
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
 const pieChartData = deliveryData.map( data => {
    return { name: data.reportStatus, value: data.count}
 })


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 rounded-lg">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold flex gap-3">
                <FaUsers />
                {stats.users}
              </dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Users
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold flex gap-3">
                <GiTestTubes />
                {stats.tests}
              </dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Total Test
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold flex gap-3">
                <FaBookMedical />
                {stats.booking}
              </dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Total Booking
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold flex">
                <FaDollarSign />
                {stats.revenue}
              </dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Total Revenue
              </dd>
            </div>
          </dl>
        </div>
      </section>
      {/* chart js */}
      <div className="flex flex-col md:flex-row justify-between ">
        <div>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Bar
              dataKey="totalRevenue"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div>
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        <Legend/>
        </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
