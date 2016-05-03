import {SampleService} from "../src/service";
import {beforeEachProviders, inject, expect, it, describe} from "@angular/core/testing";

export function main() {
    describe("Sample service", () => {
       beforeEachProviders(() => [SampleService]);

        it('should work', inject([SampleService], (service: SampleService) => {
            expect(SampleService).toBeDefined();
            expect(service).toBeDefined();
            expect(service).toBeAnInstanceOf(SampleService);
            expect(service.title).toEqual("Sample service");
        }));
    });
}