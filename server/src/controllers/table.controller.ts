import { Request, Response } from "express";
import * as tableService from "../services/table.service";
import { generateQRCode } from "../utils/qrcode";

export const getAllTables = async (req: Request, res: Response) => {
  try {
    const tables = await tableService.getAllTables();
    res.json(tables);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const getTableById = async (req: Request, res: Response) => {
  try {
    const table = await tableService.getTableById(req.params.id);
    res.json(table);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const createTable = async (req: Request, res: Response) => {
  try {
    const table = await tableService.createTable(req.body);
    const qrCode = await generateQRCode(table.id);

    res.json({ table: table, qrCode });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};


export const updateTable = async (req: Request, res: Response) => {
  try {
    const table = await tableService.updateTable(req.params.id, req.body);
    res.json(table);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};


export const deleteTable = async (req: Request, res: Response) => {
  try {
    const table = await tableService.deleteTable(req.params.id);
    res.json(table);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const generateTableQRCodeHandler = async (req: Request, res: Response) => {
  try {
    const qrCode = await generateQRCode(req.params.id);
    res.json({ qrCode });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};