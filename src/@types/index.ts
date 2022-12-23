export interface CapsuleEntity {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch?: string | null;
  original_launch_unix?: number | null;
  missions?: MissionsEntity[];
  landings: number;
  type: string;
  details?: string | null;
  reuse_count: number;
}
export interface MissionsEntity {
  name: string;
  flight: number;
}
