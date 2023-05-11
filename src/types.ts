export type TrainingListItem = {
  id: number;
  name: string;
  type: string;
  image: string;
  user_id: number;
  share_level: number;
  level_id: number;
  grade_id: number;
  left_column_name: string;
  right_column_name: string;
  created_at: string;
  updated_at: string;
  is_deleted: number;
  course_name: string;
};
export type TrainingListWord = {
  id: number;
  left_value: string;
  right_value: string;
  training_list_id: number;
  created_at: string;
  updated_at: string;
  is_deleted: number;
};
