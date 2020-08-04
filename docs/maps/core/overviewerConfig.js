var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "coordsBox": true,
            "compass": true,
            "overlays": true,
            "zoom": true,
            "spawn": true,
            "mapType": true,
            "pan": true
        },
        "cacheTag": "1596546082"
    },
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "tileSize": 384
    },
    "tilesets": [
        {
            "isOverlay": false,
            "north_direction": 0,
            "name": "Daytime Render",
            "last_rendertime": 1596545880,
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "world": "Core01",
            "maxZoom": 10,
            "showlocationmarker": true,
            "base": "",
            "zoomLevels": 10,
            "center": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "path": "day"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
