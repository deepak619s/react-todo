export const Practice = () => {
    // return <h1>Interview</h1>
    // const students = [];
    const students = [];
    return (
        <div>
            {/* <p>{students.length && "No students found"}</p> */}

            {/* //? 1st Solution :- */}
            {/* <p>{students.length === 0 && "No students found"}</p> */}

            {/* //? 2nd Solution :- */}
            {/* <p>{!students.length && "No students found"}</p> */}

            {/* //? 3rd Solution :- */}
            {/* <p>{!Boolean(students.length) && "No students found"}</p> */}
                                    {/* or */}
            <p>{Boolean(!students.length) && "No students found"}</p>

            <p>No. of students: {students.length}</p>
        </div>
    )
};

