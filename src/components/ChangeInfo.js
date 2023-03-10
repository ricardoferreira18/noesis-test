import React, { useState } from "react";
import axios from "axios";
import { FaRegSave } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

const ChangeInfo = ({ rowInfo, onSaved, onData, onCanceled }) => {
    const [state, setState] = useState(rowInfo);

    const onSubmit = () => {
        axios
            .put(
                `https://jsonplaceholder.typicode.com/users/${state.id}`,
                state
            )
            .then((response) => {
                onSaved(true);

                onData(response.data);
            })
            .catch((err) => {
                err.message = err;
            });
    };

    const onSave = (e) => {
        e.preventDefault();
        onSubmit();
    };

    const onCancel = (e) => {
        e.preventDefault();
        onCanceled(false);
    };

    const handleChange = (event) => {
        setState((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleExtraChange = (event, path) => {
        setState((prev) => ({
            ...prev,
            [path]: {
                ...prev[path],
                [event.target.name]: event.target.value,
            },
        }));
    };

    const handleGeoChange = (event) => {
        setState((prev) => ({
            ...prev,
            address: {
                ...prev.address,
                geo: {
                    ...prev.address.geo,
                    [event.target.name]: event.target.value,
                },
            },
        }));
    };

    return (
        <>
            <h2 className="h2-edit">Edit</h2>
            <div className="container--edit">
                <div className="container--input">
                    <div className="input">
                        <label className="input-label">username</label>

                        <input
                            className="input-field"
                            type="text"
                            name="username"
                            value={state.username}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="input">
                        <label className="input-label">name</label>

                        <input
                            className="input-field"
                            type="text"
                            name="name"
                            value={state.name}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="input">
                        <label className="input-label">email</label>
                        <input
                            className="input-field"
                            type="text"
                            name="email"
                            value={state.email}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="input">
                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "2rem",
                                    alignItems: "baseline",
                                }}
                            >
                                <label className="input-label">Street</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    name="street"
                                    value={state.address.street}
                                    onChange={(e) =>
                                        handleExtraChange(e, "address")
                                    }
                                />
                                <label className="input-label">Suite</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    name="suite"
                                    value={state.address.suite}
                                    onChange={(e) =>
                                        handleExtraChange(e, "address")
                                    }
                                />
                                <label className="input-label">City</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    name="city"
                                    value={state.address.city}
                                    onChange={(e) =>
                                        handleExtraChange(e, "address")
                                    }
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "2rem",
                                    alignItems: "baseline",
                                    marginTop: "2rem",
                                }}
                            >
                                <label className="input-label">zip-code</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    name="zipcode"
                                    value={state.address.zipcode}
                                    onChange={(e) =>
                                        handleExtraChange(e, "address")
                                    }
                                />
                                <label className="input-label">lat</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    name="lat"
                                    value={state.address.geo.lat}
                                    onChange={(e) => handleGeoChange(e)}
                                />
                                <label className="input-label">lng</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    name="lng"
                                    value={state.address.geo.lng}
                                    onChange={(e) => handleGeoChange(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input">
                        <label className="input-label">phone number</label>
                        <input
                            className="input-field"
                            type="text"
                            name="phone"
                            value={state.phone}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="input">
                        <label className="input-label">website</label>
                        <input
                            className="input-field"
                            type="text"
                            name="website"
                            value={state.website}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="input">
                        <label className="input-label">Company name</label>
                        <input
                            className="input-field"
                            type="text"
                            name="name"
                            value={state.company.name}
                            onChange={(e) => handleExtraChange(e, "company")}
                        />
                    </div>
                    <div className="input">
                        <label className="input-label">catchPhrase</label>
                        <input
                            className="input-field"
                            type="text"
                            name="catchPhrase"
                            value={state.company.catchPhrase}
                            onChange={(e) => handleExtraChange(e, "company")}
                        />
                    </div>
                    <div className="input">
                        <label className="input-label">bs</label>
                        <input
                            className="input-field"
                            type="text"
                            name="bs"
                            value={state.company.bs}
                            onChange={(e) => handleExtraChange(e, "company")}
                        />
                    </div>
                </div>
                <div className="input">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <button
                            className="btn btn-save btn-big"
                            onClick={onSave}
                        >
                            <FaRegSave style={{ marginRight: "3px" }} />
                            Save
                        </button>
                        <button
                            className="btn btn-cancel btn-big"
                            onClick={onCancel}
                        >
                            <GiCancel style={{ marginRight: "3px" }} />
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChangeInfo;
