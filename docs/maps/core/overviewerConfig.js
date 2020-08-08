var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "path": "day",
            "imgextension": "png",
            "isOverlay": false,
            "defaultZoom": 1,
            "maxZoom": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "north_direction": 0,
            "showlocationmarker": true,
            "last_rendertime": 1596895080,
            "world": "Core01",
            "poititle": "Markers",
            "zoomLevels": 10,
            "center": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "base": "",
            "bgcolor": "#1a1a1a"
        }
    ],
    "map": {
        "debug": true,
        "controls": {
            "overlays": true,
            "spawn": true,
            "zoom": true,
            "pan": true,
            "compass": true,
            "mapType": true,
            "coordsBox": true
        },
        "cacheTag": "1596895282",
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ]
};
