import axios from "axios";
import { API_BASE_URL } from "./api";

const orgId = localStorage.getItem("organizationId");

export const getWarehouses = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${orgId}/warehouse`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getWarehouseById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${orgId}/warehouse/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const createWarehouse = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/warehouse`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchWarehouse = async (state, city) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${orgId}/warehouse/filter?state=${state}&city=${city}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateInventory = async (id, data) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/warehouse/updateInventoryItem/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateWarehouse = async (data, id) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/warehouse/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteWarehouse = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/warehouse/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
