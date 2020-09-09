var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png"
        }
    },
    "map": {
        "controls": {
            "zoom": true,
            "spawn": true,
            "coordsBox": true,
            "compass": true,
            "pan": true,
            "mapType": true,
            "overlays": true
        },
        "cacheTag": "1599642085",
        "debug": true,
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "isOverlay": false,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "base": "",
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "maxZoom": 10,
            "imgextension": "png",
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "last_rendertime": 1599641880,
            "path": "day",
            "defaultZoom": 1
        }
    ]
};
