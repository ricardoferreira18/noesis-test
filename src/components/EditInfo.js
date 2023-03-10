import React, { useContext} from "react";
import { FaRegSave } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { GlobalContext } from "../context/GlobalState";

const EditInfo = () => {
    const { rowInfo, handleChange, handleExtraChange, handleGeoChange, onSubmit, handleCancel } = useContext(GlobalContext);
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
                            value={rowInfo.username}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="input">
                        <label className="input-label">name</label>

                        <input
                            className="input-field"
                            type="text"
                            name="name"
                            value={rowInfo.name}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="input">
                        <label className="input-label">email</label>
                        <input
                            className="input-field"
                            type="text"
                            name="email"
                            value={rowInfo.email}
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
                                    value={rowInfo.address.street}
                                    onChange={(e) =>
                                        handleExtraChange(e, "address")
                                    }
                                />
                                <label className="input-label">Suite</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    name="suite"
                                    value={rowInfo.address.suite}
                                    onChange={(e) =>
                                        handleExtraChange(e, "address")
                                    }
                                />
                                <label className="input-label">City</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    name="city"
                                    value={rowInfo.address.city}
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
                                    value={rowInfo.address.zipcode}
                                    onChange={(e) =>
                                        handleExtraChange(e, "address")
                                    }
                                />
                                <label className="input-label">lat</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    name="lat"
                                    value={rowInfo.address.geo.lat}
                                    onChange={(e) => handleGeoChange(e)}
                                />
                                <label className="input-label">lng</label>
                                <input
                                    className="input-field"
                                    type="text"
                                    name="lng"
                                    value={rowInfo.address.geo.lng}
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
                            value={rowInfo.phone}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="input">
                        <label className="input-label">website</label>
                        <input
                            className="input-field"
                            type="text"
                            name="website"
                            value={rowInfo.website}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="input">
                        <label className="input-label">Company name</label>
                        <input
                            className="input-field"
                            type="text"
                            name="name"
                            value={rowInfo.company.name}
                            onChange={(e) => handleExtraChange(e, "company")}
                        />
                    </div>
                    <div className="input">
                        <label className="input-label">catchPhrase</label>
                        <input
                            className="input-field"
                            type="text"
                            name="catchPhrase"
                            value={rowInfo.company.catchPhrase}
                            onChange={(e) => handleExtraChange(e, "company")}
                        />
                    </div>
                    <div className="input">
                        <label className="input-label">bs</label>
                        <input
                            className="input-field"
                            type="text"
                            name="bs"
                            value={rowInfo.company.bs}
                            onChange={(e) => handleExtraChange(e, "company")}
                        />
                    </div>
                </div>
                <div className="input">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <button
                            className="btn btn-save btn-big"
                            onClick={onSubmit}
                        >
                            <FaRegSave style={{ marginRight: "3px" }} />
                            Save
                        </button>
                        <button
                            className="btn btn-cancel btn-big"
                            onClick={handleCancel}
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

export default EditInfo;
