var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "imgextension": "png",
            "poititle": "Markers",
            "isOverlay": false,
            "world": "world",
            "path": "day",
            "last_rendertime": 1595764579,
            "minZoom": 0,
            "name": "Daytime Render",
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "north_direction": 0,
            "defaultZoom": 1,
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a"
        }
    ],
    "map": {
        "cacheTag": "1595764958",
        "controls": {
            "pan": true,
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true
        },
        "debug": true,
        "north_direction": "lower-left"
    },
    "worlds": [
        "world"
    ]
};
