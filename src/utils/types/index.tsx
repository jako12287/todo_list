
export type Status = 'PENDING' | 'INPROGRESS' | 'COMPLETED' | 'URGENT' | 'DELEGATED';

export const statusTask: Record<Status, { backgroundColor: string; color: string }> = {
    PENDING: {
        backgroundColor: "#F7932750",
        color: "#F79327",
    },
    INPROGRESS: {
        backgroundColor: "#79E0EE50",
        color: "#30A2FF",
    },
    COMPLETED: {
        backgroundColor: "#9CFF2E50",
        color: "#367E18",
    },
    URGENT: {
        backgroundColor: "#F24C3D50",
        color: "#F24C3D",
    },
    DELEGATED: {
        backgroundColor: "#7149C650",
        color: "#7149C6",
    },
};

export const statusName: Record<Status, string> = {
    PENDING: "Pending",
    INPROGRESS: "In progress",
    COMPLETED: 'Completed',
    URGENT: "Urgent",
    DELEGATED: "Delegated"
  };

  interface PropsDataTablet {
    _id: string;
    index: string;
    task: string;
    status: Status;
  }
  
  export interface PropsTablet {
    data: PropsDataTablet[];
  }