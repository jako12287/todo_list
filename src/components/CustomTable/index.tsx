import { PropsTablet, statusName, statusTask } from "../../utils/types";
import CustomActions from "../CustomActions";
import { CustomBadge } from "../CustomBadge";

const CustomTable: React.FC<PropsTablet> = ({ data }) => {
  const handleEdit = ({ _id }: any) => { console.log('edit', _id) }
  const handleDelete = ({ _id }: any) => { console.log('delete', _id) }
  return (
    <div className="grid grid-cols-4 gap-4 text-labelText font-SemiBold">
      <div className="p-4">#</div>
      <div className="p-4">Task</div>
      <div className="p-4 text-end">Status</div>
      <div className="p-4 text-center">Actions</div>

      <div>
        {data &&
          data.map(({ _id, index, status, task }) => (
            <div
              key={_id}
              className="w-cardPrimary text-textContent flex h-12 items-center"
            >
              <div className=" w-14 text-center">{index}</div>
              <div className=" w-72">{task}</div>
              <div className=" w-28 text-center">
                <CustomBadge
                  backgroundColor={statusTask[status].backgroundColor}
                  color={statusTask[status].color}
                >
                  {statusName[status]}
                </CustomBadge>
              </div>
              <div className=" grow text-center"><CustomActions handleEdit={handleEdit} handleDelete={handleDelete} _id={_id} /></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CustomTable;
