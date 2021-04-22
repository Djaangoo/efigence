import { Pipe, PipeTransform } from '@angular/core';
import { Unit, UnitPrecisionMap } from 'src/app/model/types';

@Pipe({
    name: 'fileSize'
})

export class FileSizePipe implements PipeTransform {
    private readonly defaultPrecisionMap: UnitPrecisionMap = {
        kB: 0,
        mB: 1,
    };
    private readonly units: Unit[] = [ 'kB', 'mB' ];

    transform(bytes: number = 0, precision: number | UnitPrecisionMap = this.defaultPrecisionMap): string {
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
            return '?';
        }

        let unitIndex = 0;

        while (bytes >= 1024) {
            bytes /= 1024;
            unitIndex++;
        }

        const unit = this.units[unitIndex];

        if (typeof precision === 'number') {
            return `${bytes.toFixed(+precision)} ${unit}`;
        }
        return `${bytes.toFixed(precision[unit])} ${unit}`;
    }
}
