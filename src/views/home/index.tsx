import FormAddTask from "../../components/AddTask";
import CustomButtom from "../../components/CustomButton";
import CustomCard from "../../components/CustomCard";
import CustomTable from "../../components/CustomTable";

const Home = () => {
    const data = [
        {
            _id: "1234356kjnkj",
            index: "01",
            task: "Complete the monthly sales report",
            status: "PENDING" as const,
        },
        {
            _id: "123435s6kjsnkj",
            index: "02",
            task: "Complete the monthly sales report",
            status: "INPROGRESS" as const,
        },
        {
            _id: "1234356kjnkssj",
            index: "03",
            task: "Complete the monthly sales report",
            status: "COMPLETED" as const,
        },
        {
            _id: "1234356ksssjsnkj",
            index: "04",
            task: "Complete the monthly sales report",
            status: "URGENT" as const,
        }, {
            _id: "123435ssss6kjnkj",
            index: "05",
            task: "Complete the monthly sales report",
            status: "DELEGATED" as const,
        },
        {
            _id: "1234ddd356kjsnkj",
            index: "06",
            task: "Complete the monthly sales report",
            status: "PENDING" as const,
        },
    ];


    return (
        <div className="bg-texture bg-custom bg-center h-screen flex w-screen pt-8 pb-8">
            <div className="flex items-end w-left flex-col gap-10 ">
                <CustomCard width="w-cardSecondary" height="h-60">
                    <p className="font-Medium text-button mt-4 mb-5">Welcome Nombre</p>
                    <CustomButtom >
                        Log Out
                    </CustomButtom>
                </CustomCard>

                <CustomCard width="w-cardSecondary" height="h-96">
                    <p className="font-Medium text-button mt-4 mb-5">Add Task</p>
                    <FormAddTask />
                </CustomCard>
            </div>
            <div className="flex justify-start ps-14 w-right">
                <CustomCard>
                    <div className="text-labelText font-SemiBold mt-8 mb-4">To Do List</div>
                    <CustomTable data={data} />
                </CustomCard>
            </div>
        </div>
    );
};

export default Home;
