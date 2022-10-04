import { ITimeStampedCreationObject } from "./ITimeStampedCreationObject";
import { ITimeStampedEditionObject } from "./ITimeStampedEditionObject";

export interface ITimeStampedObject extends 
  ITimeStampedCreationObject, 
  ITimeStampedEditionObject 
  {}