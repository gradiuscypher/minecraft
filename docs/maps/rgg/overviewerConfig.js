var overviewerConfig = {
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1599336170",
        "controls": {
            "zoom": true,
            "mapType": true,
            "spawn": true,
            "coordsBox": true,
            "pan": true,
            "compass": true,
            "overlays": true
        }
    },
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "north_direction": 0,
            "world": "world",
            "minZoom": 0,
            "maxZoom": 8,
            "imgextension": "png",
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "path": "day",
            "showlocationmarker": true,
            "poititle": "Markers",
            "isOverlay": false,
            "last_rendertime": 1599335779,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "base": "",
            "center": [
                3,
                80,
                12
            ]
        }
    ],
    "worlds": [
        "world"
    ]
};
