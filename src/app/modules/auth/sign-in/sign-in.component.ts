import {
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    NgForm,
    Validators
} from '@angular/forms';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    fuseAnimations
} from '@fuse/animations';
import {
    FuseAlertType
} from '@fuse/components/alert';
import {
    AuthService
} from 'app/core/auth/auth.service';

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class AuthSignInComponent implements OnInit {
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: {
        type: FuseAlertType; message: string
    } = {
            type: 'success',
            message: ''
        };
    signInForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router
    ) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        localStorage.removeItem('accessToken');

        localStorage.removeItem('user');

        this.signInForm = this._formBuilder.group({
            name: ['', [Validators.required]],
            password: ['', Validators.required],
            rememberMe: ['']
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void {
        // Return if the form is invalid
        if (this.signInForm.invalid) {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;
        const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

        // Navigate to the redirect url
        this._router.navigateByUrl(redirectURL);
        // Sign in
        this._authService.signInAnd(this.signInForm.value)
            .subscribe(
                () => {

                    // Sign in
                    this._authService.signIn({
                        phone: '3103680445',
                        password: 'Diaz15171399'
                    })
                        .subscribe(
                            () => {
                                const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                                this._router.navigateByUrl(redirectURL);
                            },
                            (response) => {
                                // Re-enable the form
                                this.signInForm.enable();
                                // Reset the form
                                this.signInNgForm.resetForm();
                                // Set the alert
                                this.alert = {
                                    type: 'error',
                                    message: 'Usuario o contraseña incorrectos'
                                };
                                // Show the alert
                                this.showAlert = true;
                            }
                        );

                },
                (response) => {
                    // Re-enable the form
                    this.signInForm.enable();
                    // Reset the form
                    this.signInNgForm.resetForm();
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: 'Usuario o contraseña incorrectos'
                    };
                    // Show the alert
                    this.showAlert = true;
                }
            );





    }
}