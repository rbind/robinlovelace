window.EB = window.EB || {};

EB.CookieHeader = (function ($, EB) {
    return {
        init: function() {
            $('#close').on('click', function (event) {
                event.preventDefault;
                EB.CookieHeader._setCookieWithExpiry();
                $('#cookie_header').hide();
            });
        },
        _getExpirationDate: function() {
            var quarters, expirationMonths, date, month, expirationDate;

            // Determines the quarter the current date falls in
            // i.e. July(7) is in Q3
            quarters = {
                q1: function q1(month) {
                    return month <= 3;
                },
                q2: function q2(month) {
                    return month <= 6;
                },
                q3: function q3(month) {
                    return month <= 9;
                },
                q4: function q4(month) {
                    return month <= 12;
                }
            };

            // Depending on the quarter, determines the month on which the cookie expires
            // i.e. Q3 cookies expires on the 1st of October(10)
            expirationMonths = {
                q1: 4,
                q2: 7,
                q3: 10,
                q4: 1
            };

            date = new Date();

            // getMonth() returns number (January is 0 and December is 11)
            // adding one to match calendar months
            month = date.getMonth() + 1;

            function _getExpirationMonth() {
                return _.find(expirationMonths, function (value, key) {
                    return quarters[key](month);
                });
            }

            function _getExpirationYear() {
                return _getExpirationMonth() === 1 ? date.getFullYear() + 1 : date.getFullYear();
            }

            // Subtract 1 from expirationMonth to return to 0-based months
            expirationDate = new Date(_getExpirationYear(), _getExpirationMonth() - 1, 1);

            return expirationDate;
        },
        _getCookieConfig: function() {
            return { path: '/', expires: this._getExpirationDate() };
        },
        _setCookieWithExpiry: function() {
            $.cookie('acceptedCookieHeader', 'true', this._getCookieConfig());
        }
    };
})(window.jQuery, EB);
