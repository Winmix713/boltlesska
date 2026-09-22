/**
 * Canonical WinMix computation boundary.
 *
 * Browser workers and the Supabase Edge Function consume this one entry point.
 * Do not add React, storage, network or Worker APIs below this boundary.
 */
export { computeLeaguePipeline } from '../utils/pipeline';
export { FEATURE_SCHEMA_VERSION, PIPELINE_CONTRACT_VERSION } from '../utils/constants';
export { FORECAST_MODEL_VERSION } from '../utils/forecastCore';
export type { PipelineParams, PipelineResult } from '../utils/pipeline';
export type {
  CalibrationState,
  ExperimentSettings,
  HistoryScope,
  League,
  MatchPipeline,
  MatchRow,
  Season
} from '../types/winmix';
