var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png"
        }
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "spawn": true,
            "compass": true,
            "mapType": true,
            "coordsBox": true,
            "pan": true,
            "zoom": true,
            "overlays": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1596027683"
    },
    "tilesets": [
        {
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1596027480,
            "zoomLevels": 10,
            "minZoom": 0,
            "defaultZoom": 1,
            "isOverlay": false,
            "imgextension": "png",
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "base": "",
            "north_direction": 0,
            "path": "day"
        }
    ]
};
