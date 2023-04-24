import React, { useState, useRef, useEffect } from "react";
import "./Admin.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/Config";
import Loader from "../../Components/Loader/Loader";
import CircularProgress from "@mui/material/CircularProgress";

const Admin = () => {
  const [category, setCategory] = useState("mens");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [season, setSeason] = useState("");
  const [price, setPrice] = useState(0);
  const [technology, setTechnology] = useState("");
  const [activities, setActivities] = useState("");

  //loader
  const [loader, setLoader] = useState(false);

  //set data in arrays for firestore
  const [newSize, setNewSize] = useState("");
  const [size, setSize] = useState([]);

  const [newColors, setNewColors] = useState("");
  const [colors, setColors] = useState([]);

  const [newPhoto, setNewPhoto] = useState("");
  const [photo, setPhoto] = useState([]);

  const [newMainDesc, setNewMainDesc] = useState("");
  const [mainDesc, setMainDesc] = useState([]);

  const inputFocus = useRef(null);
  const [loadingDelay, setLoadingDelay] = useState(true);

  const [newParameter, setNewParameter] = useState("");
  const [parameter, setParameter] = useState([]);

  // console.log(size);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setLoadingDelay(false);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      await addDoc(collection(db, category), {
        title,
        description,
        mainDesc,
        season,
        price: Number(price),
        technology,
        parameter,
        activities,
        size,
        colors,
        photo,
      });
    } catch (e) {
      console.log(e.message);
    }
    setTimeout(() => setLoader(false), 2000);

    setTitle("");
    setDescription("");
    setMainDesc([]);
    setPrice("");
    setColors([]);
    setPhoto([]);
    setSize([]);
    setParameter([]);
    setActivities("");
    setSeason("");
    setTechnology("");
  };

  const handleAddSizes = (e) => {
    e.preventDefault();
    const ing = newSize.trim();

    if (ing && !size.includes(ing)) {
      setSize((prevSize) => [...prevSize, ing]);
    }
    setNewSize("");
    // inputFocus.current.focus();
  };

  const handleAddPhotos = (e) => {
    e.preventDefault();
    const pht = newPhoto.trim();

    if (pht && !photo.includes(pht)) {
      setPhoto((prevSize) => [...prevSize, pht]);
    }
    setNewPhoto("");
    // inputFocus.current.focus();
  };

  const handleAddColors = (e) => {
    e.preventDefault();
    const clr = newColors.trim();

    if (clr && !colors.includes(clr)) {
      setColors((prevSize) => [...prevSize, clr]);
    }
    setNewColors("");
    // inputFocus.current.focus();
  };

  const handleAddMainDesc = (e) => {
    e.preventDefault();
    const desc = newMainDesc.trim();

    if (desc && !mainDesc.includes(desc)) {
      setMainDesc((prevSize) => [...prevSize, desc]);
    }
    setNewMainDesc("");
    // inputFocus.current.focus();
  };

  const handleAddParameter = (e) => {
    e.preventDefault();
    const param = newParameter.trim();

    if (param && !mainDesc.includes(param)) {
      setParameter((prevSize) => [...prevSize, param]);
    }
    setNewParameter("");
    // inputFocus.current.focus();
  };

  return (
    <>
      {loadingDelay ? (
        <Loader />
      ) : (
        <>
          <div className="admin-container">
            <div className="create">
              <h1 className="page-title">Add new Product</h1>

              <form onSubmit={handleSubmit}>
                <select
                  className="cat-select"
                  name="category"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option value="jackets">Mens</option>
                  <option value="womens">Womens</option>
                </select>
                <label>
                  <span>Product Title: </span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    value={title}
                    required
                    placeholder="Add the product title"
                  />
                </label>

                <label>
                  <span>Description:</span>
                  <textarea
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    value={description}
                    required
                    placeholder="Product description"
                  />
                </label>

                <label>
                  <span>Main Description: </span>
                  <div className="arrays-desc">
                    <input
                      type="text"
                      onChange={(e) => setNewMainDesc(e.target.value)}
                      value={newMainDesc}
                      ref={inputFocus}
                      // required
                      placeholder="Main description, one at a time"
                    />
                    <button className="button-30" onClick={handleAddMainDesc}>
                      add
                    </button>
                  </div>
                </label>
                <p>
                  Current main Description:
                  {mainDesc?.map((desc) => (
                    <span className="size-span">{desc}</span>
                  ))}
                </p>

                <label>
                  <span>Activities: </span>
                  <input
                    type="text"
                    onChange={(e) => setActivities(e.target.value)}
                    value={activities}
                    required
                    placeholder="Activities"
                  />
                </label>

                <label>
                  <span>Season: </span>
                  <input
                    type="text"
                    onChange={(e) => setSeason(e.target.value)}
                    value={season}
                    required
                    placeholder="Season"
                  />
                </label>

                <label>
                  <span>Technology: </span>
                  <input
                    type="text"
                    onChange={(e) => setTechnology(e.target.value)}
                    value={technology}
                    required
                    placeholder="Technology"
                  />
                </label>

                <label>
                  <span>Colors: </span>
                  <div className="arrays-desc">
                    <input
                      type="text"
                      onChange={(e) => setNewColors(e.target.value)}
                      value={newColors}
                      ref={inputFocus}
                      // required
                      placeholder="Color, one at a time"
                    />
                    <button className="button-30" onClick={handleAddColors}>
                      add
                    </button>
                  </div>
                </label>
                <p>
                  Current Colors:
                  {colors?.map((color) => (
                    <span className="size-span">{color}</span>
                  ))}
                </p>

                <label>
                  <span>Size: </span>
                  <div className="arrays-desc">
                    <input
                      type="text"
                      onChange={(e) => setNewSize(e.target.value)}
                      value={newSize}
                      ref={inputFocus}
                      // required
                      placeholder="Size, one at a time"
                    />
                    <button className="button-30" onClick={handleAddSizes}>
                      add
                    </button>
                  </div>
                </label>
                <p>
                  Current Sizes:
                  {size?.map((one) => (
                    <span className="size-span">{one}</span>
                  ))}
                </p>

                <label>
                  <span>Photo Links: </span>
                  <div className="arrays-desc">
                    <input
                      type="url"
                      onChange={(e) => setNewPhoto(e.target.value)}
                      value={newPhoto}
                      // ref={inputFocus}
                      // required
                      placeholder="Image links, one at a time"
                    />
                    <button className="button-30" onClick={handleAddPhotos}>
                      add
                    </button>
                  </div>
                </label>
                <p>
                  Current photos:
                  {photo?.map((one) => (
                    <span className="size-span">{one}</span>
                  ))}
                </p>

                <label>
                  <span>Parameters: </span>
                  <div className="arrays-desc">
                    <input
                      type="text"
                      onChange={(e) => setNewParameter(e.target.value)}
                      value={newParameter}
                      // ref={inputFocus}
                      // required
                      placeholder="Parameters of the product"
                    />
                    <button className="button-30" onClick={handleAddParameter}>
                      add
                    </button>
                  </div>
                </label>
                <p>
                  Current parameters:
                  {parameter?.map((param) => (
                    <span className="size-span">{param}</span>
                  ))}
                </p>

                <label>
                  <span>Price: </span>
                  <input
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    required
                    placeholder="Price, in RON"
                  />
                </label>

                {loader ? (
                  <div className="progress-add-item">
                    <CircularProgress
                      color='secondary'
                    />
                    <br />
                    <span style={{ color: "green" }}>
                      Product added successfully
                    </span>
                  </div>
                ) : (
                  <button>Submit</button>
                )}
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Admin;
