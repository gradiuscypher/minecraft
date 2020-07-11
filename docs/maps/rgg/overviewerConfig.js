var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "world": "world",
            "poititle": "Markers",
            "defaultZoom": 1,
            "maxZoom": 8,
            "name": "Daytime Render",
            "zoomLevels": 8,
            "minZoom": 0,
            "showlocationmarker": true,
            "base": "",
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "isOverlay": false,
            "last_rendertime": 1594500980,
            "center": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "path": "day"
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1594501902",
        "controls": {
            "pan": true,
            "zoom": true,
            "mapType": true,
            "spawn": true,
            "coordsBox": true,
            "overlays": true,
            "compass": true
        },
        "north_direction": "lower-left"
    },
    "worlds": [
        "world"
    ]
};
