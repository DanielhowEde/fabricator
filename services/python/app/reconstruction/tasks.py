"""Task management for async reconstruction jobs."""

import uuid
import asyncio
from enum import Enum
from datetime import datetime
from typing import Optional, Dict, Any
from dataclasses import dataclass, field
from pathlib import Path


class TaskStatus(str, Enum):
    QUEUED = "queued"
    PREPROCESSING = "preprocessing"
    GENERATING_MESH = "generating_mesh"
    EXTRACTING_TEXTURE = "extracting_texture"
    EXPORTING = "exporting"
    COMPLETED = "completed"
    FAILED = "failed"


@dataclass
class TaskState:
    task_id: str
    status: TaskStatus
    progress: float  # 0.0 to 1.0
    stage_message: str
    created_at: str
    updated_at: str
    error: Optional[str] = None
    result_paths: Dict[str, str] = field(default_factory=dict)


class TaskManager:
    """In-memory task manager for reconstruction jobs.

    For production, replace with Redis/Celery backend.
    """

    def __init__(self, output_base: Path):
        self._tasks: Dict[str, TaskState] = {}
        self._output_base = output_base
        self._lock = asyncio.Lock()

    def create_task(self) -> str:
        """Create a new task and return its ID."""
        task_id = str(uuid.uuid4())
        now = datetime.utcnow().isoformat()

        self._tasks[task_id] = TaskState(
            task_id=task_id,
            status=TaskStatus.QUEUED,
            progress=0.0,
            stage_message="Task queued",
            created_at=now,
            updated_at=now,
        )

        return task_id

    def get_task(self, task_id: str) -> Optional[TaskState]:
        """Get task state by ID."""
        return self._tasks.get(task_id)

    async def update_task(
        self,
        task_id: str,
        status: Optional[TaskStatus] = None,
        progress: Optional[float] = None,
        stage_message: Optional[str] = None,
        error: Optional[str] = None,
        result_paths: Optional[Dict[str, str]] = None,
    ) -> None:
        """Update task state."""
        async with self._lock:
            task = self._tasks.get(task_id)
            if not task:
                return

            if status is not None:
                task.status = status
            if progress is not None:
                task.progress = progress
            if stage_message is not None:
                task.stage_message = stage_message
            if error is not None:
                task.error = error
            if result_paths is not None:
                task.result_paths.update(result_paths)

            task.updated_at = datetime.utcnow().isoformat()

    def get_task_output_dir(self, task_id: str) -> Path:
        """Get the output directory for a task."""
        return self._output_base / task_id

    def task_to_dict(self, task: TaskState) -> Dict[str, Any]:
        """Convert task state to API response dict."""
        return {
            "task_id": task.task_id,
            "status": task.status.value,
            "progress": task.progress,
            "stage_message": task.stage_message,
            "created_at": task.created_at,
            "updated_at": task.updated_at,
            "error": task.error,
            "result_paths": task.result_paths,
        }
