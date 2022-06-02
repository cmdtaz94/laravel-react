<?php

namespace App\Models;

use App\Traits\UuidAsId;
use Illuminate\Database\Eloquent\Model as EloquentModel;
use Illuminate\Database\Eloquent\SoftDeletes;

class Model extends EloquentModel
{
    use UuidAsId, SoftDeletes;
}
