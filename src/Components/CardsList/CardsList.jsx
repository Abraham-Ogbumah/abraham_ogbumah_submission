import React, { PureComponent } from "react";
import { Query } from "react-apollo";
import { conect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addProduct } from "../../redux/product/product-actions";
import CategoryList from "../CategoryList/CategoryList";