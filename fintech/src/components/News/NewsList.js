import React from "react";

const NewsList = ({ searchResultList }) => {
    return (
        <div>
            <p></p>
            {searchResultList.map(({ title, url }, index) => {
                return (
                    <>
                        # {index + 1} &nbsp;
                        <a href={url} key={index}>
                            {title}
                        </a>
                        <br></br>
                    </>
                );
            })}
        </div>
    );
};

export default NewsList;
