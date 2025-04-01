import toast from "react-hot-toast";

export const formatDate = (date) => {

    let datee = new Date(date);

    // if date is invalid
    if(isNaN(datee)) {
        toast.error("Invalid date");
        return "yyyy-MM-dd"
    }

    const options = { 
        year: "numeric",
        month: "long", 
        day: "numeric",
    }

    return datee.toLocaleDateString('en-US', options);
}