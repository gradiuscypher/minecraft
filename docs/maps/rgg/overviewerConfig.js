var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "north_direction": 0,
            "path": "day",
            "world": "world",
            "zoomLevels": 8,
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "base": "",
            "showlocationmarker": true,
            "name": "Daytime Render",
            "last_rendertime": 1594968979,
            "imgextension": "png"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1594969360",
        "controls": {
            "zoom": true,
            "compass": true,
            "pan": true,
            "coordsBox": true,
            "spawn": true,
            "overlays": true,
            "mapType": true
        }
    },
    "worlds": [
        "world"
    ]
};
